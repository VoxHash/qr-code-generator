const express = require('express');
const cors = require('cors');
const QRCode = require('qrcode');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'QR Code Generator API is running' });
});

// Generate QR Code
app.post('/api/qr/generate', async (req, res) => {
  try {
    const { content, size = 256, format = 'png' } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    // Generate QR code data URL
    const qrDataURL = await QRCode.toDataURL(content, {
      width: size,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });

    // Save to database
    const qrRecord = await prisma.qRCode.create({
      data: {
        content,
        size,
        format
      }
    });

    res.json({
      id: qrRecord.id,
      content,
      size,
      format,
      dataURL: qrDataURL,
      createdAt: qrRecord.createdAt
    });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

// Get QR Code by ID
app.get('/api/qr/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const qrRecord = await prisma.qRCode.findUnique({
      where: { id }
    });

    if (!qrRecord) {
      return res.status(404).json({ error: 'QR Code not found' });
    }

    // Regenerate QR code data URL
    const qrDataURL = await QRCode.toDataURL(qrRecord.content, {
      width: qrRecord.size,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });

    res.json({
      id: qrRecord.id,
      content: qrRecord.content,
      size: qrRecord.size,
      format: qrRecord.format,
      dataURL: qrDataURL,
      createdAt: qrRecord.createdAt
    });
  } catch (error) {
    console.error('Error fetching QR code:', error);
    res.status(500).json({ error: 'Failed to fetch QR code' });
  }
});

// Get all QR Codes
app.get('/api/qr', async (req, res) => {
  try {
    const qrCodes = await prisma.qRCode.findMany({
      orderBy: { createdAt: 'desc' }
    });

    res.json(qrCodes);
  } catch (error) {
    console.error('Error fetching QR codes:', error);
    res.status(500).json({ error: 'Failed to fetch QR codes' });
  }
});

// Delete QR Code
app.delete('/api/qr/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.qRCode.delete({
      where: { id }
    });

    res.json({ message: 'QR Code deleted successfully' });
  } catch (error) {
    console.error('Error deleting QR code:', error);
    res.status(500).json({ error: 'Failed to delete QR code' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});