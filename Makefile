SHELL = /bin/sh

.PHONY: up
up:
	docker-compose up

.PHONY: bash
bash:
	docker-compose run jekyll bash

.PHONY: setup
setup:
	docker-compose run jekyll bundle install
	docker-compose run webpack yarn install

.PHONY: build-assets
build-assets:
	docker-compose run webpack yarn run build

.PHONY: up!
up!:
	docker-compose up --force-recreate --build

.PHONY: down
down:
	docker-compose down --remove-orphans
