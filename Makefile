up:
	docker-compose up -d

up-production:
	docker-compose up -d -f ./docker-compose.production.yml

down:
	docker-compose down --remove-orphans