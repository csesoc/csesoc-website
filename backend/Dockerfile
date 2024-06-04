FROM node:22-alpine

ENV NODE_ENV production

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

EXPOSE 9000

CMD ["npm", "start"]