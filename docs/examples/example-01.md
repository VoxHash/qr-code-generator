# Example 1: Basic QR Code Generation

Generate a simple QR code using the API.

## Using cURL

```bash
curl -X POST http://localhost:3001/api/qr/generate \
  -H "Content-Type: application/json" \
  -d '{
    "content": "https://voxhash.dev",
    "size": 256,
    "format": "png"
  }'
```

## Using JavaScript (Fetch API)

```javascript
const response = await fetch('http://localhost:3001/api/qr/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: 'https://voxhash.dev',
    size: 256,
    format: 'png'
  })
});

const qrCode = await response.json();
console.log('QR Code ID:', qrCode.id);
console.log('Data URL:', qrCode.dataURL);
```

## Using Python

```python
import requests

response = requests.post(
    'http://localhost:3001/api/qr/generate',
    json={
        'content': 'https://voxhash.dev',
        'size': 256,
        'format': 'png'
    }
)

qr_code = response.json()
print(f"QR Code ID: {qr_code['id']}")
print(f"Data URL: {qr_code['dataURL']}")
```

## Displaying the QR Code

The response includes a `dataURL` that can be used directly in an `<img>` tag:

```html
<img src="{dataURL}" alt="QR Code" />
```

Or in React:

```jsx
<img src={qrCode.dataURL} alt="QR Code" />
```
