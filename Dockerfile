FROM node:16-alpine

USER node

WORKDIR /home/node/app

COPY package*.json .

EXPOSE 3060

CMD ["sh", "-c", "npm install tail", "-f", "/dev/null"]

