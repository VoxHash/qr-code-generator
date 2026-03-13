# Getting Started

Welcome to QR Code Generator! This guide will help you get up and running quickly.

## Prerequisites

- **Node.js** 18 or higher
- **Docker and Docker Compose** (optional, for database)
- **Git**

## Quick Setup

### Option 1: Docker Compose (Recommended)

The easiest way to get started is using Docker Compose:

```bash
# Clone the repository
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator

# Start all services
docker-compose up --build
```

This will start:
- PostgreSQL database on port 5432
- Backend API on port 3001
- Frontend application on port 3000

Access the application at http://localhost:3000

### Option 2: Local Development

For local development without Docker:

#### 1. Setup Backend

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your database URL

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Start development server
npm run dev
```

#### 2. Setup Frontend

In a new terminal:

```bash
cd frontend
npm install

# Create .env.local file
cp .env.example .env.local
# Edit .env.local with your API URL

# Start development server
npm run dev
```

## Next Steps

- Read the [Usage Guide](usage.md) to learn how to use the application
- Check out [Examples](examples/) for code samples
- Review [API Documentation](api.md) for API usage
- See [Configuration](configuration.md) for customization options

## Troubleshooting

If you encounter issues, check the [Troubleshooting Guide](troubleshooting.md) or [FAQ](faq.md).
