FROM node:14 

WORKDIR /usr/orderbook-parser/src

COPY package*.json ../.

COPY yarn.lock ../.

COPY src .

RUN yarn

EXPOSE 8080

CMD [ "yarn", "start" ]
