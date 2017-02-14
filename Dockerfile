FROM node:6.9

COPY package.json /app/package.json
WORKDIR /app
RUN npm install

COPY . /app

ENTRYPOINT [ "/app/node_modules/.bin/mocha" ]
