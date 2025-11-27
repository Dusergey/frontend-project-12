install: 
	npm ci && cd frontend && npm ci

build: 
	npm ci && cd frontend && npm ci && npm run build

start: 
	npx start-server -s ./frontend/dist
