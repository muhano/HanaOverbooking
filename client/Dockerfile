#Build Steps
FROM node:16.14.2-alpine as build-step

WORKDIR /usr/local/app

COPY package.json package-lock.json /usr/local/app/
RUN npm install && npm cache clean --force
COPY ./ ./

RUN npm run build

#Run Steps
FROM nginx:1.21.6-alpine  
COPY --from=build-step /usr/local/app/build /usr/share/nginx/html