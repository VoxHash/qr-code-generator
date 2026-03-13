# Example 2: Batch QR Code Generation

Generate multiple QR codes in a batch operation.

## Using Bash Script

```bash
#!/bin/bash

URLS=(
  "https://voxhash.dev"
  "https://github.com/VoxHash"
  "https://twitter.com/VoxHash"
)

for url in "${URLS[@]}"; do
  curl -X POST http://localhost:3001/api/qr/generate \
    -H "Content-Type: application/json" \
    -d "{\"content\": \"$url\", \"size\": 256, \"format\": \"png\"}"
  echo ""
done
```

## Using JavaScript

```javascript
const urls = [
  'https://voxhash.dev',
  'https://github.com/VoxHash',
  'https://twitter.com/VoxHash'
];

const generateBatch = async (urls) => {
  const results = await Promise.all(
    urls.map(url =>
      fetch('http://localhost:3001/api/qr/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: url, size: 256, format: 'png' })
      }).then(res => res.json())
    )
  );
  
  return results;
};

const qrCodes = await generateBatch(urls);
console.log(`Generated ${qrCodes.length} QR codes`);
```

## Using Python

```python
import requests
import asyncio

urls = [
    'https://voxhash.dev',
    'https://github.com/VoxHash',
    'https://twitter.com/VoxHash'
]

def generate_qr_code(url):
    response = requests.post(
        'http://localhost:3001/api/qr/generate',
        json={'content': url, 'size': 256, 'format': 'png'}
    )
    return response.json()

# Sequential
qr_codes = [generate_qr_code(url) for url in urls]

# Parallel (using asyncio)
import aiohttp

async def generate_batch(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [
            session.post(
                'http://localhost:3001/api/qr/generate',
                json={'content': url, 'size': 256, 'format': 'png'}
            ) for url in urls
        ]
        responses = await asyncio.gather(*tasks)
        return [await r.json() for r in responses]

qr_codes = asyncio.run(generate_batch(urls))
```
