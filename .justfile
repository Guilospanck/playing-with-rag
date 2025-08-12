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
	docker-compose up -d --build --remove-orphans -f docker-compose.dev.yml 

local-docker-down:
	docker-compose down -f docker-compose.dev.yml 

# Run RAGit locally
local-ragit: local-docker-up
	cd verba/ && bash -c 'source ./scripts/dev.sh && init'

format:
	cd verba/ && black .

lint:
	cd verba/ && ruff check .

types:
	cd verba/ && mypy .

pre-pr: format lint types

