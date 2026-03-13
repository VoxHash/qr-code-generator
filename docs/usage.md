# Usage

How to use QR Code Generator to create and manage QR codes.

## Web Interface

### Generating QR Codes

1. **Open the application** at http://localhost:3000
2. **Enter content** in the text area (text, URL, or any content)
3. **Adjust size** using the slider (128px - 512px)
4. **Click "Generate QR Code"**
5. **Download** or view the generated QR code

### Managing QR Codes

- **View History**: See all previously generated QR codes in the "Recent QR Codes" section
- **Delete**: Click the "Delete" button to remove a QR code
- **Download**: Click "Download" to save a QR code as PNG

## API Usage

### Generate QR Code

```bash
curl -X POST http://localhost:3001/api/qr/generate \
  -H "Content-Type: application/json" \
  -d '{
    "content": "https://voxhash.dev",
    "size": 256,
    "format": "png"
  }'
```

**Response:**
```json
{
  "id": "cmmo5axo20000lbsmavv4zoyu",
  "content": "https://voxhash.dev",
  "size": 256,
  "format": "png",
  "dataURL": "data:image/png;base64,iVBORw0KGgo...",
  "createdAt": "2026-03-13T00:15:18.003Z"
}
```

### Get All QR Codes

```bash
curl http://localhost:3001/api/qr
```

### Get Specific QR Code

```bash
curl http://localhost:3001/api/qr/{id}
```

### Delete QR Code

```bash
curl -X DELETE http://localhost:3001/api/qr/{id}
```

## Common Workflows

### Batch Generation

```bash
# Generate multiple QR codes
for url in "https://example.com" "https://github.com" "https://voxhash.dev"; do
  curl -X POST http://localhost:3001/api/qr/generate \
    -H "Content-Type: application/json" \
    -d "{\"content\": \"$url\", \"size\": 256, \"format\": \"png\"}"
done
```

### Export All QR Codes

Use the API to fetch all QR codes and process them programmatically.

## Best Practices

- Use appropriate sizes: 256px for most use cases, 512px for print
- Keep content concise for better QR code readability
- Regularly clean up old QR codes to maintain database performance
- Use HTTPS URLs for better security

## Advanced Usage

See [API Documentation](api.md) for complete API reference and advanced features.
