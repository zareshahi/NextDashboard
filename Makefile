run:
	docker build --network=host -t asr-dashboard:beta .
	docker compose up -d 

build:
	docker compose up --build --remove-orphans --force-recreate -d

test:
	docker compose exec boillerplate npm run test

coverage:
	docker compose exec boillerplate npm run test:coverage

down:
	docker compose down

stop:
	CRAWLER_NAME=asr-dashboard ;\
	CRAWLER=$$(docker ps -q --filter ancestor=$$CRAWLER_NAME) ;\
	[ ! -z "$$CRAWLER" ] && docker stop $$CRAWLER || true
