FROM node:17-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm run install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:prod"]