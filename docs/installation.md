# Installation

Platform-specific installation instructions for QR Code Generator.

## Prerequisites

Before installing, ensure you have:

- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Docker and Docker Compose** (optional, for database)
- **Git** ([Download](https://git-scm.com/))

## Installation Methods

### Method 1: Docker Compose (Recommended)

Best for: Quick setup, production-like environment

```bash
# Clone repository
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator

# Start services
docker-compose up --build
```

### Method 2: Local Installation

Best for: Development, customization

#### Step 1: Clone Repository

```bash
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator
```

#### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

#### Step 3: Configure Backend

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your settings
# DATABASE_URL=postgresql://postgres:password@localhost:5432/qrcode_db
# PORT=3001
```

#### Step 4: Setup Database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push
```

#### Step 5: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

#### Step 6: Configure Frontend

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your API URL
# NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Platform-Specific Notes

### Windows

- Use Git Bash or WSL for better compatibility
- Ensure Docker Desktop is running if using Docker Compose
- Use PowerShell or Command Prompt for npm commands

### macOS

- Install Node.js via Homebrew: `brew install node`
- Docker Desktop available from [docker.com](https://www.docker.com/products/docker-desktop)

### Linux

- Install Node.js via package manager or [nvm](https://github.com/nvm-sh/nvm)
- Install Docker and Docker Compose via package manager

## Verification

After installation, verify everything works:

```bash
# Backend health check
curl http://localhost:3001/health

# Frontend (open in browser)
open http://localhost:3000
```

## Next Steps

- [Getting Started](getting-started.md)
- [Usage Guide](usage.md)
- [Configuration](configuration.md)
