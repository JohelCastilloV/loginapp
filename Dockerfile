FROM mhart/alpine-node:10


WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN mkdir server

COPY server ./server

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

RUN cd server && npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]