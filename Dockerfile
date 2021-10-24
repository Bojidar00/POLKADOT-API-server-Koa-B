# syntax=docker/dockerfile:1

FROM node:14.0.0

COPY ["package.json", "package-lock.json*", "./"]

WORKDIR /POLKADOT-API-server-Koa-B

COPY . .

RUN npm install

CMD [ "node", "server.js" ]