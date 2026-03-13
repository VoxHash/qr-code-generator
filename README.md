# QR Code Generator

[![Build](https://img.shields.io/github/actions/workflow/status/VoxHash/qr-code-generator/ci.yml)](https://github.com/VoxHash/qr-code-generator/actions)
[![License](https://img.shields.io/github/license/VoxHash/qr-code-generator)](LICENSE)
[![Release](https://img.shields.io/github/v/release/VoxHash/qr-code-generator?sort=semver)](https://github.com/VoxHash/qr-code-generator/releases)
[![Docs](https://img.shields.io/badge/docs-website-blue)](./docs/index.md)

> A modern, full-stack QR code generator application built with Next.js, Express.js, and PostgreSQL. Generate, store, and manage QR codes with a beautiful, responsive web interface.

## ✨ Features

- **QR Code Generation**: Create QR codes from any text, URL, or content
- **Customizable Size**: Adjustable QR code dimensions (128px - 512px)
- **Real-time Preview**: See your QR code instantly as you generate
- **Download Support**: Download generated QR codes as PNG images
- **History Management**: View and manage previously generated QR codes
- **Database Storage**: Persistent storage with PostgreSQL and Prisma ORM
- **Responsive Design**: Beautiful UI that works on all devices
- **Docker Support**: Easy deployment with Docker Compose

## 🧭 Table of Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Examples](#-examples)
- [Architecture](#-architecture)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Quick Start

```bash
# 1) Clone the repository
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator

# 2) Start with Docker Compose (Recommended)
docker-compose up --build

# 3) Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
```

## 💿 Installation

See [docs/installation.md](docs/installation.md) for platform-specific steps.

### Prerequisites

- Node.js 18+
- Docker and Docker Compose (optional)
- Git

### Local Development Setup

```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run db:generate
npm run db:push
npm run dev

# Frontend (in another terminal)
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## 🛠 Usage

Basic usage here. Advanced usage in [docs/usage.md](docs/usage.md).

### Generate QR Code

1. Open the web interface at http://localhost:3000
2. Enter the content you want to encode (text, URL, etc.)
3. Adjust the size slider (128px - 512px)
4. Click "Generate QR Code"
5. Download or manage your QR codes

### API Usage

```bash
# Generate QR code
curl -X POST http://localhost:3001/api/qr/generate \
  -H "Content-Type: application/json" \
  -d '{"content": "https://voxhash.dev", "size": 256, "format": "png"}'

# Get all QR codes
curl http://localhost:3001/api/qr

# Delete QR code
curl -X DELETE http://localhost:3001/api/qr/{id}
```

See [docs/api.md](docs/api.md) for complete API reference.

## ⚙️ Configuration

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:password@localhost:5432/qrcode_db` |
| `PORT` | Backend server port | `3001` |
| `NEXT_PUBLIC_API_URL` | Frontend API endpoint | `http://localhost:3001` |

Full reference: [docs/configuration.md](docs/configuration.md)

## 📚 Examples

- Start here: [docs/examples/example-01.md](docs/examples/example-01.md)
- More: [docs/examples/](docs/examples/)

## 🧩 Architecture

High-level overview: The application consists of a Next.js frontend, Express.js backend API, and PostgreSQL database. The frontend communicates with the backend via REST API, and the backend uses Prisma ORM for database operations.

See [docs/architecture.md](docs/architecture.md) for detailed architecture documentation.

## 🗺 Roadmap

Planned milestones live in [ROADMAP.md](ROADMAP.md). For changes, see [CHANGELOG.md](CHANGELOG.md).

## 🤝 Contributing

We welcome PRs! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the PR template.

## 🔒 Security

Please report vulnerabilities via [SECURITY.md](SECURITY.md).

## 🚀 Deployment

This full-stack application can be deployed on:

- **Railway** (Recommended) - Full-stack with database support
- **Render** - Free tier available
- **Vercel** - Frontend only (backend needs separate hosting)
- **Fly.io** - Docker-based deployment

See [docs/deployment.md](docs/deployment.md) for detailed deployment instructions.

### Quick Deploy on Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template)

1. Click the button above or visit [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add PostgreSQL database
4. Deploy backend and frontend services
5. Set environment variables
6. Done!

## 📄 License

This project is licensed under the terms in [LICENSE](LICENSE).

## 📞 Support

- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/VoxHash/qr-code-generator/issues)
- **Email**: contact@voxhash.dev
- **Support Guide**: [SUPPORT.md](SUPPORT.md)

---

**Built with ❤️ by [@VoxHash](https://github.com/VoxHash)**
