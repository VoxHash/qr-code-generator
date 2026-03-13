# Quick Start

Get QR Code Generator running in under 5 minutes!

## Docker Compose (Fastest)

```bash
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator
docker-compose up --build
```

Visit http://localhost:3000

## Local Development

```bash
# Backend
cd backend && npm install && npm run db:generate && npm run db:push && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

That's it! See [Getting Started](getting-started.md) for detailed instructions.
