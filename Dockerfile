FROM mhart/alpine-node:10


WORKDIR /usr/src/app


COPY package*.json ./

RUN mkdir server

COPY server ./server

RUN npm install

RUN cd server && npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]