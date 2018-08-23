FROM node:6
ADD ./package.json /amalgamjs/package.json
WORKDIR /amalgamjs
RUN npm install
ADD . /amalgamjs
