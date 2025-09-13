# QR Code Generator 🚀

A modern, full-stack QR code generator application built with Next.js, Express.js, and PostgreSQL. Generate, store, and manage QR codes with a beautiful, responsive web interface.

[![GitHub stars](https://img.shields.io/github/stars/VoxHash/qr-code-generator?style=social)](https://github.com/VoxHash/qr-code-generator)
[![GitHub forks](https://img.shields.io/github/forks/VoxHash/qr-code-generator?style=social)](https://github.com/VoxHash/qr-code-generator/fork)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)

> **Built by [@VoxHash](https://github.com/VoxHash)** - AI Engineer | Blockchain, Web3 and Smart Contracts

## 🎯 Demo

![QR Code Generator Demo](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=QR+Code+Generator+Demo)

> **Live Demo**: [Coming Soon] | **Video Demo**: [Watch on YouTube](https://youtube.com)

## ✨ Features

- **🔗 QR Code Generation**: Create QR codes from any text, URL, or content
- **📏 Customizable Size**: Adjustable QR code dimensions (128px - 512px)
- **👀 Real-time Preview**: See your QR code instantly as you type
- **💾 Download Support**: Download generated QR codes as PNG images
- **📚 History Management**: View and manage previously generated QR codes
- **🗄️ Database Storage**: Persistent storage with PostgreSQL and Prisma ORM
- **📱 Responsive Design**: Beautiful UI that works on all devices
- **🐳 Docker Support**: Easy deployment with Docker Compose
- **⚡ Fast & Modern**: Built with the latest web technologies

## 🎯 Why This Project?

As an **AI Engineer** with expertise in **Blockchain, Web3, and Smart Contracts**, I built this QR Code Generator to demonstrate:

- **Full-Stack Development Skills**: Modern React/Next.js frontend with Express.js backend
- **Database Design**: Efficient data modeling with Prisma ORM and PostgreSQL
- **API Development**: RESTful API design with proper error handling
- **DevOps Practices**: Docker containerization and multi-service orchestration
- **UI/UX Design**: Responsive, modern interface with Tailwind CSS
- **Production Readiness**: Proper configuration, documentation, and deployment setup

This project showcases my ability to create **production-ready applications** that solve real-world problems with clean, maintainable code.

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Express.js** - Node.js web framework
- **Prisma** - Modern database ORM
- **PostgreSQL** - Relational database
- **QRCode** - QR code generation library

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Git

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qr-code-generator
   ```

2. **Start all services**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Database: localhost:5432

### Option 2: Local Development

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd qr-code-generator
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npx prisma generate
   npx prisma db push
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📖 API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| POST | `/api/qr/generate` | Generate new QR code |
| GET | `/api/qr` | Get all QR codes |
| GET | `/api/qr/:id` | Get specific QR code |
| DELETE | `/api/qr/:id` | Delete QR code |

### Generate QR Code

```bash
POST /api/qr/generate
Content-Type: application/json

{
  "content": "Hello World",
  "size": 256,
  "format": "png"
}
```

**Response:**
```json
{
  "id": "clx123...",
  "content": "Hello World",
  "size": 256,
  "format": "png",
  "dataURL": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

## 🗄️ Database Schema

```prisma
model QRCode {
  id          String   @id @default(cuid())
  content     String
  size        Int      @default(256)
  format      String   @default("png")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🐳 Docker Configuration

The project includes Docker configuration for easy deployment:

- **PostgreSQL**: Database service
- **Backend**: Express.js API server
- **Frontend**: Next.js application

All services are configured with proper networking and volume mounts for development.

## 🧪 Development

### Backend Development
```bash
cd backend
npm run dev          # Start development server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
```

### Frontend Development
```bash
cd frontend
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## 📁 Project Structure

```
qr-code-generator/
├── backend/
│   ├── src/
│   │   └── index.js          # Express server
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🔧 Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/qrcode_db"
PORT=3001
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚀 Deployment

### Production with Docker

1. **Build and start services**
   ```bash
   docker-compose -f docker-compose.yml up --build -d
   ```

2. **Run database migrations**
   ```bash
   docker-compose exec backend npx prisma db push
   ```

### Manual Deployment

1. **Setup database** (PostgreSQL)
2. **Deploy backend** (Node.js/Express)
3. **Deploy frontend** (Next.js)
4. **Configure environment variables**

## 🤝 Contributing

Contributions are welcome! This project is part of my portfolio as an AI Engineer. Here's how you can contribute:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass

### Ideas for Contributions
- Add QR code scanning functionality
- Implement custom QR code styling
- Add batch QR code generation
- Create mobile app version
- Add analytics and tracking features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

- [ ] QR code scanning functionality
- [ ] Batch QR code generation
- [ ] Custom QR code styling (colors, logos)
- [ ] QR code analytics and tracking
- [ ] User authentication and accounts
- [ ] QR code templates and presets
- [ ] API rate limiting and security
- [ ] Mobile app (React Native)

## 📞 Connect with Me

- **GitHub**: [@VoxHash](https://github.com/VoxHash)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/voxhash)
- **Portfolio**: [View my work](https://voxhash.dev)
- **Email**: [Get in touch](mailto:contact@voxhash.dev)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=VoxHash/qr-code-generator&type=Date)](https://star-history.com/#VoxHash/qr-code-generator&Date)

---

<div align="center">

**Built with ❤️ by [@VoxHash](https://github.com/VoxHash)**

*AI Engineer | Blockchain, Web3 and Smart Contracts*

[![GitHub followers](https://img.shields.io/github/followers/VoxHash?style=social)](https://github.com/VoxHash)
[![Twitter Follow](https://img.shields.io/twitter/follow/VoxHash?style=social)](https://twitter.com/VoxHash)

</div>