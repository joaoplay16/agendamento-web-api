FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV NODE_ENV=production
EXPOSE 8088
CMD [ "node", "server.js" ]