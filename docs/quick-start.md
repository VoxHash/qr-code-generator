# Quick Start

Get QR Code Generator running in under 5 minutes!

## Docker Compose (Fastest)

```bash
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator
docker-compose up --build
```

The backend waits for PostgreSQL, runs `prisma db push`, then starts the API — no manual database setup step.

Visit http://localhost:3010 (API: http://localhost:3011)

## Local Development

```bash
# Backend
cd backend && npm install && npm run db:generate && npm run db:push && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

That's it! See [Getting Started](getting-started.md) for detailed instructions.
