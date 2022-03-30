FROM node:12

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["node", "app.js"]