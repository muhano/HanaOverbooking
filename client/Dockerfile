#Build Steps
FROM node:16.14.2 as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.21.6  
COPY --from=build-step /app/build /usr/share/nginx/html