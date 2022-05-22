FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]