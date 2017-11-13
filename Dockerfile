# Use an official node runtime as a parent image
FROM node:latest
# Set the working directory to /app
WORKDIR /app

# setup dependencies
COPY package.json /app
RUN npm install
COPY . /app

# run our server
CMD node server.js

EXPOSE 8081