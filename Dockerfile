FROM node:16.17.0-alpine3.15

RUN apk add --no-cache libc6-compat
RUN npm i -g npm

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /home/nextjs/app

COPY package.json .
COPY package-lock.json .

RUN npm install --omit=optional
COPY . .

RUN npm run build

CMD [ "npm", "start" ]
