FROM node:18-bookworm-slim

WORKDIR /app

# Prisma needs OpenSSL at runtime (Debian bookworm ships OpenSSL 3)
RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
