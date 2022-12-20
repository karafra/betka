FROM node:18-alpine AS builder

ARG MOGNO

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY tsconfig.json .
COPY tsconfig.build.json .
COPY config.prod.yml config.yml
COPY src src

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]