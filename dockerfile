FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

COPY . .

RUN npm install

RUN npm run build

FROM node:18 AS runner


RUN npm install -g serve


WORKDIR /app


COPY --from=builder /app/dist ./dist


EXPOSE 3000

CMD ["serve", "dist", "-l", "80"]