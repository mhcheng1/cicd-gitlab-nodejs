# using alpine to reduce size of image from 900mb to 150mb
FROM node:14-alpine AS build

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["node", "app.js"]