FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

# Copy source code
COPY . .

# Set environment variables for better performance
ENV NODE_ENV=production
ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=8080

# Expose Vite's port
EXPOSE 8080

# Start the server with optimizations
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080", "--force"]