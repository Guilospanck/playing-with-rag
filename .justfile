start-weaviate:
	cd weaviate/ && docker-compose up -d --build --remove-orphans

stop-weaviate:
	cd weaviate/ && docker-compose down
