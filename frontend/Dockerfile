FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache yarn

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

RUN yarn run build

ENTRYPOINT [ "yarn", "start" ]