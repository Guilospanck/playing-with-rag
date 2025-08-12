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

# Run RAGit locally
local-ragit-up: local-docker-up
	bash -c 'source ./scripts/run.dev.sh && init'

format:
	cd verba/ && black .

lint:
	cd verba/ && ruff check .

types:
	cd verba/ && mypy .

pre-pr: format lint types

