FROM oven/bun:latest

WORKDIR /app

COPY package.json .

COPY bun.lockb .

COPY index.js .

RUN bun install

ENTRYPOINT [ "bun", "index" ]