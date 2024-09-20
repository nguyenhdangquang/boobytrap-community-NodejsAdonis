# BoobyTrapp

#### Requirements

Since AdonisJs is a Node.js framework, please make sure Node.js is installed on your operating system with npm. Below are the minimum required versions.

Node.js 8.0 or greater.

Npm 3.0 or greater.


#### Running project

1. Manual

	1.1 Install Mariadb [MariaDB](https://mariadb.org/download/)
	
	1.2 Clone project from bitbucket
	
	`git clone `
	
	1.3 Change project environment variables
	
	+ Create `.env` file from `.env.example`
	+ Change environment variables that fit in your local development
	
	1.4 Running the project

	```
	npm i -g @adonisjs/cli
	
	npm install
	
	adonis migration:run
	
	npm start
	```
	
	
2. Docker

	```
	docker-compose up
	```

Open the website on the browser ```localhost:3333```
