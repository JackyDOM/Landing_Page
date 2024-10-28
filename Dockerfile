FROM node:lts-alpine3.19 AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

# SERVICE
FROM node:lts-alpine3.19 AS service

WORKDIR /app

# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
COPY --from=builder /app .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]