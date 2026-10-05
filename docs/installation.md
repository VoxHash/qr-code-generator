# Installation

Platform-specific installation instructions for QR Code Generator.

## Prerequisites

Before installing, ensure you have:

- **Node.js** 20.0.0 or higher (CI uses Node 24; [Download](https://nodejs.org/))
- **npm** package manager
- **Docker and Docker Compose** (optional, recommended for PostgreSQL)
- **Git** ([Download](https://git-scm.com/))

## Required environment variables

| Variable | Where | Required | Purpose |
|---|---|---|---|
| `DATABASE_URL` | `backend/.env` | Yes | PostgreSQL connection string |
| `PORT` | `backend/.env` | No (default `3001`) | Backend listen port |
| `NEXT_PUBLIC_API_URL` | `frontend/.env.local` | No (default `http://localhost:3001`) | Frontend → API base URL |

Copy from the committed templates:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

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

On first start (and after schema changes), the backend container applies the Prisma schema with `db push` once PostgreSQL is ready. You do not need to run `docker compose exec backend npx prisma db push`.

Then open http://localhost:3010 (API: http://localhost:3011, Postgres host: localhost:5435).

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

## Deployment

This is a full-stack app (Next.js + Express + PostgreSQL). GitHub Pages is not suitable.

### Docker Compose

```bash
docker-compose up --build
```

Frontend: `http://localhost:3010` · API: `http://localhost:3011` · Postgres host: `localhost:5435`

### Railway (recommended hosted path)

1. Create a project at [railway.app](https://railway.app) and add PostgreSQL.
2. Deploy `backend/` with `DATABASE_URL`, `PORT=3001`, `NODE_ENV=production`.
3. Run `npm run db:push` in the backend service.
4. Deploy `frontend/` with `NEXT_PUBLIC_API_URL` set to the backend public URL.

`railway.json` in the repo root supports Railway deploys.

### Render

Use [render.com](https://render.com) with a PostgreSQL instance, a web service for `backend/`, and a web service for `frontend/`. Set the same env vars as above. See `render.yaml` for a starting blueprint.

### Vercel (frontend only)

Import the `frontend/` directory on [vercel.com](https://vercel.com) and set `NEXT_PUBLIC_API_URL` to a separately hosted backend (Railway/Render/Fly.io).

## Next Steps

- [Getting Started](getting-started.md)
- [Usage Guide](usage.md)
- [Configuration](configuration.md)
