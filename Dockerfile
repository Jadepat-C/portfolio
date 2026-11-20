# syntax=docker/dockerfile:1

# ---- Stage 1: build the site with Node ----
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first, so Docker can reuse this layer
# when only the source code changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Stage 2: serve the built files with Nginx ----
# Only the static files from stage 1 end up in this small image;
# Node and node_modules are left behind.
FROM nginx:1.30-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
