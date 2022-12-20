FROM node:18-alpine AS builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY angular.json .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY src src

RUN npm run-script build

FROM nginx:1.15.5-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/app/dist/d3-client /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["/bin/ash", "-c", "nginx -g 'daemon off;'"]
