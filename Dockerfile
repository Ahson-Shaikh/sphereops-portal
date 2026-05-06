FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for better layer caching.
COPY package*.json ./
RUN npm ci

# Copy source code and build static assets.
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

# Custom Nginx config for SPA fallback routing.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static site from the builder stage.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]