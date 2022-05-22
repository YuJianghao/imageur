FROM node:16-alpine as builder

WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app
ENV NODE_ENV production
COPY . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile -P
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["npm", "start"]