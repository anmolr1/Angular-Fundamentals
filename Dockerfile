# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install

#stage 2

FROM nginx:alpine
COPY --from=node /app/dist/Angular-Fundamentals /usr/share/nginx/html
