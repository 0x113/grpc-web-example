all: gen-proto gen-client
	docker-compose up

gen-proto:
	cd proto && make

gen-client:
	cd client && npm install && npx webpack client.js

