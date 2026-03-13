# Architecture

High-level architecture overview of QR Code Generator.

## System Overview

QR Code Generator is a full-stack web application consisting of three main components:

1. **Frontend**: Next.js React application
2. **Backend**: Express.js REST API
3. **Database**: PostgreSQL with Prisma ORM

## Architecture Diagram

```
┌─────────────┐
│   Browser   │
│  (Next.js)  │
└──────┬──────┘
       │ HTTP/REST
       │
┌──────▼──────┐
│   Backend   │
│  (Express)  │
└──────┬──────┘
       │
       │ Prisma ORM
       │
┌──────▼──────┐
│ PostgreSQL  │
│  Database   │
└─────────────┘
```

## Components

### Frontend (Next.js)

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Features**:
  - Server-side rendering
  - Client-side interactivity
  - Image optimization
  - Responsive design

### Backend (Express.js)

- **Framework**: Express.js
- **Language**: JavaScript (Node.js)
- **ORM**: Prisma
- **QR Code Library**: qrcode
- **Features**:
  - RESTful API
  - CORS support
  - Error handling
  - Database operations

### Database (PostgreSQL)

- **Type**: Relational database
- **ORM**: Prisma
- **Schema**: Defined in `prisma/schema.prisma`

## Data Flow

1. User interacts with frontend UI
2. Frontend makes API request to backend
3. Backend processes request and queries database
4. Backend generates QR code using qrcode library
5. Backend returns response with QR code data URL
6. Frontend displays QR code to user

## Database Schema

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

## API Design

RESTful API with the following endpoints:

- `GET /health` - Health check
- `POST /api/qr/generate` - Generate QR code
- `GET /api/qr` - Get all QR codes
- `GET /api/qr/:id` - Get specific QR code
- `DELETE /api/qr/:id` - Delete QR code

## Deployment

### Docker Compose

All services are containerized and orchestrated with Docker Compose:

- PostgreSQL container
- Backend container
- Frontend container

### Environment Variables

Configuration is managed through environment variables for flexibility and security.

## Security Considerations

- Input validation on API endpoints
- CORS configuration
- Environment variable management
- Database connection security

## Future Improvements

- Add authentication and authorization
- Implement rate limiting
- Add caching layer
- Consider microservices architecture for scale
- Add monitoring and logging

## Technology Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Prisma ORM
- qrcode library

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose
