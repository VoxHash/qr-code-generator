# API Reference

Complete API documentation for QR Code Generator.

## Base URL

```
http://localhost:3001
```

## Endpoints

### Health Check

Check if the API is running.

**Request:**
```http
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "message": "QR Code Generator API is running"
}
```

---

### Generate QR Code

Create a new QR code.

**Request:**
```http
POST /api/qr/generate
Content-Type: application/json
```

**Body:**
```json
{
  "content": "string (required)",
  "size": "number (optional, default: 256)",
  "format": "string (optional, default: 'png')"
}
```

**Response:**
```json
{
  "id": "string",
  "content": "string",
  "size": 256,
  "format": "png",
  "dataURL": "data:image/png;base64,...",
  "createdAt": "2026-03-13T00:15:18.003Z"
}
```

**Example:**
```bash
curl -X POST http://localhost:3001/api/qr/generate \
  -H "Content-Type: application/json" \
  -d '{"content": "https://voxhash.dev", "size": 256, "format": "png"}'
```

---

### Get All QR Codes

Retrieve all generated QR codes.

**Request:**
```http
GET /api/qr
```

**Response:**
```json
[
  {
    "id": "string",
    "content": "string",
    "size": 256,
    "format": "png",
    "dataURL": "data:image/png;base64,...",
    "createdAt": "2026-03-13T00:15:18.003Z",
    "updatedAt": "2026-03-13T00:15:18.003Z"
  }
]
```

**Example:**
```bash
curl http://localhost:3001/api/qr
```

---

### Get QR Code by ID

Retrieve a specific QR code by ID.

**Request:**
```http
GET /api/qr/:id
```

**Parameters:**
- `id` (path, required): QR code ID

**Response:**
```json
{
  "id": "string",
  "content": "string",
  "size": 256,
  "format": "png",
  "dataURL": "data:image/png;base64,...",
  "createdAt": "2026-03-13T00:15:18.003Z"
}
```

**Example:**
```bash
curl http://localhost:3001/api/qr/cmmo5axo20000lbsmavv4zoyu
```

---

### Delete QR Code

Delete a QR code by ID.

**Request:**
```http
DELETE /api/qr/:id
```

**Parameters:**
- `id` (path, required): QR code ID

**Response:**
```json
{
  "message": "QR Code deleted successfully"
}
```

**Example:**
```bash
curl -X DELETE http://localhost:3001/api/qr/cmmo5axo20000lbsmavv4zoyu
```

## Error Responses

### 400 Bad Request

```json
{
  "error": "Content is required"
}
```

### 404 Not Found

```json
{
  "error": "QR Code not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Failed to generate QR code"
}
```

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

## Rate Limiting

Currently, there is no rate limiting. This should be implemented in production.

## Authentication

Currently, the API does not require authentication. This should be added for production use.
