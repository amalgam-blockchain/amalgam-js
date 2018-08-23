FROM node:4
ADD ./package.json /amalgamjs/package.json
WORKDIR /amalgamjs
RUN npm install
ADD . /amalgamjs
