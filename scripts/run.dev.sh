#!/bin/bash
set -e
set -m

init_venv(){
	if [ -n "$VIRTUAL_ENV" ]; then
		echo "✅ Virtual environment is active: $VIRTUAL_ENV"
	else
		echo "❌ No virtual environment active, activating..."
		python3 -m venv venv
		source venv/bin/activate
		echo "✅ Virtual environment is active: $VIRTUAL_ENV"
	fi
}

install_dev_deps(){
	python -m pip install -e "./verba[dev]"
}

init_env_and_install_dev_deps(){
	init_venv
	install_dev_deps	
}

init_ragit(){
	ragit start
}

init(){
	cleanup() {
		echo ""
		echo "🛑 Caught CTRL+C, cleaning up..."
		if [ -n "$VIRTUAL_ENV" ]; then
		    deactivate
		    echo "🚪 Virtual environment deactivated."
		fi
		exit 0
	}

	# Trap CTRL+C for the duration of init()
	trap cleanup SIGINT
	init_env_and_install_dev_deps
	init_ragit

	# Clear the trap once init finishes normally
	trap - SIGINT
}

format() {
	init_venv
	black ./verba
}

types() {
	init_venv
	mypy ./verba
}

lint() {
	init_venv
	ruff check ./verba --fix
}
