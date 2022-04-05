#Build Steps
FROM node:16.14.2 as build-step

RUN mkdir /app
WORKDIR /app

ENV REACT_APP_BASE_URL=http://server2-latihan-hana1.192.168.99.100.nip.io
ENV PORT=3001

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.21.6  
COPY --from=build-step /app/build /usr/share/nginx/html