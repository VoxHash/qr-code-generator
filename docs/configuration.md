# Configuration

Configuration options for QR Code Generator.

## Environment Variables

### Backend Configuration

Create a `.env` file in the `backend/` directory:

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/qrcode_db"

# Server
PORT=3001

# Optional: Node environment
NODE_ENV=development
```

### Frontend Configuration

Create a `.env.local` file in the `frontend/` directory:

```env
# API Endpoint
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Configuration Options

### Database URL

Format: `postgresql://[user]:[password]@[host]:[port]/[database]`

Example:
```
DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/qrcode_db
```

### Server Port

Default: `3001`

Change the backend server port:
```env
PORT=3001
```

### API URL

Default: `http://localhost:3001`

Configure the frontend API endpoint:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Docker Configuration

### docker-compose.yml

The `docker-compose.yml` file configures:

- **PostgreSQL**: Database service on port 5432
- **Backend**: API server on port 3001
- **Frontend**: Web application on port 3000

To modify ports, edit `docker-compose.yml`:

```yaml
services:
  backend:
    ports:
      - "3001:3001"  # Change first number to change host port
```

## QR Code Settings

### Size Range

- **Minimum**: 128px
- **Maximum**: 512px
- **Default**: 256px

### Format

Currently supported: `png`

## Production Configuration

### Environment Variables

For production, set:

```env
NODE_ENV=production
DATABASE_URL=<your-production-database-url>
```

### Security

- Use strong database passwords
- Enable HTTPS
- Configure CORS appropriately
- Set up rate limiting

## Troubleshooting

If configuration issues occur:

1. Check environment variable names (case-sensitive)
2. Verify database connection string format
3. Ensure ports are not already in use
4. Check file permissions for `.env` files

See [Troubleshooting](troubleshooting.md) for more help.
