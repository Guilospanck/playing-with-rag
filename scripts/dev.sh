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
	python -m pip install -e ".[dev]"
}

init_ragit(){
	ragit start
}

init(){
	init_env
	install_dev_deps	
	init_ragit
}
