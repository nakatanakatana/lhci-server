FROM node:14-buster-slim

WORKDIR /usr/src/lhci
COPY package.json .
COPY lighthouserc.js .
RUN npm install

EXPOSE 9001
CMD [ "npm", "start" ]
