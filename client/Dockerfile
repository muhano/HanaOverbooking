#Build Steps
FROM node:16.14.2-alpine as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.21.6-alpine  
COPY --from=build-step /app/build /usr/share/nginx/html