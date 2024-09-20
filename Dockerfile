FROM node:8

WORKDIR /app/

RUN npm i -g @adonisjs/cli

ADD package.json /app/
RUN npm install

COPY . /app/