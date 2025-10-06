# Makefile for managing Postgres Docker container

CONTAINER_NAME=pawnprizes
POSTGRES_DB=pawnprizes
POSTGRES_USER=postgres
POSTGRES_PASSWORD=secret
POSTGRES_PORT=5432
POSTGRES_IMAGE=postgres:15

.PHONY: up down destroy reset logs

up:
	docker run --name $(CONTAINER_NAME) \
		-e POSTGRES_DB=$(POSTGRES_DB) \
		-e POSTGRES_USER=$(POSTGRES_USER) \
		-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
		-v "./init.sql:/docker-entrypoint-initdb.d/init.sql" \
		-p $(POSTGRES_PORT):5432 \
		-d $(POSTGRES_IMAGE)

down:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

destroy: down
	docker volume prune -f

reset: destroy up

logs:
	docker logs -f $(CONTAINER_NAME)
