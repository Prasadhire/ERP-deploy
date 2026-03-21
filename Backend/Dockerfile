#stage 1 
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


#Stage 2
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

RUN npm prune --production

EXPOSE 5000

CMD ["node","server.js"]
