docker-up:
	docker-compose up -d --build --remove-orphans 

docker-down:
	docker-compose down

# checks logs of verba
docker-logs:
	docker-compose logs verba -f

# Bash exec into verba
docker-exec:
	docker-compose exec verba bash

local-docker-up:
	docker-compose -f docker-compose.dev.yml up -d --build --remove-orphans 

local-docker-down:
	docker-compose -f docker-compose.dev.yml down

# Activate venv and install frontend deps but without starting it
install-frontend:
	bash -c 'source ./scripts/run.dev.sh && init_env_and_install_dev_deps'

# Activate venv, install frontend deps and start it
init-frontend:
	bash -c 'source ./scripts/run.dev.sh && init'

# Run RAGit locally
local-ragit-up: local-docker-up init-frontend

format: 
	bash -c 'source ./scripts/run.dev.sh && format'

lint:
	bash -c 'source ./scripts/run.dev.sh && lint'

types:
	bash -c 'source ./scripts/run.dev.sh && types'

pre-pr: format lint types

