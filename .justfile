start:
	docker-compose up -d --build --remove-orphans 

stop:
	docker-compose down

# checks logs of verba
logs:
	docker-compose logs verba -f

# Bash exec into verba
exec:
	docker-compose exec verba bash
