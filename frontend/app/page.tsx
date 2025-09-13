'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface QRCode {
  id: string;
  content: string;
  size: number;
  format: string;
  dataURL: string;
  createdAt: string;
}

export default function Home() {
  const [content, setContent] = useState('');
  const [size, setSize] = useState(256);
  const [qrCode, setQrCode] = useState<QRCode | null>(null);
  const [qrCodes, setQrCodes] = useState<QRCode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchQRCodes();
  }, []);

  const fetchQRCodes = async () => {
    try {
      console.log('Fetching QR codes from:', `${API_URL}/api/qr`);
      const response = await axios.get(`${API_URL}/api/qr`);
      console.log('QR codes response:', response.data);
      setQrCodes(response.data);
    } catch (err) {
      console.error('Error fetching QR codes:', err);
    }
  };

  const generateQRCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError('');

    try {
      console.log('Generating QR code with:', { content, size, format: 'png' });
      console.log('API URL:', `${API_URL}/api/qr/generate`);
      const response = await axios.post(`${API_URL}/api/qr/generate`, {
        content,
        size,
        format: 'png'
      });
      
      console.log('QR generation response:', response.data);
      setQrCode(response.data);
      fetchQRCodes(); // Refresh the list
    } catch (err: any) {
      console.error('QR generation error:', err);
      setError(err.response?.data?.error || 'Failed to generate QR code');
    } finally {
      setLoading(false);
    }
  };

  const deleteQRCode = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/api/qr/${id}`);
      fetchQRCodes();
      if (qrCode?.id === id) {
        setQrCode(null);
      }
    } catch (err) {
      console.error('Error deleting QR code:', err);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode?.dataURL) return;
    
    const link = document.createElement('a');
    link.href = qrCode.dataURL;
    link.download = `qrcode-${qrCode.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          QR Code Generator
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generator Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Generate QR Code</h2>
            
            <form onSubmit={generateQRCode} className="space-y-4">
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content to encode
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter text, URL, or any content to encode..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                />
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                  Size: {size}px
                </label>
                <input
                  type="range"
                  id="size"
                  min="128"
                  max="512"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !content.trim()}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating...' : 'Generate QR Code'}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {/* Generated QR Code Display */}
            {qrCode && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Generated QR Code</h3>
                <div className="text-center">
                  <img
                    src={qrCode.dataURL}
                    alt="Generated QR Code"
                    className="mx-auto border border-gray-300 rounded"
                  />
                  <div className="mt-3 space-x-2">
                    <button
                      onClick={downloadQRCode}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => setQrCode(null)}
                      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* QR Codes History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent QR Codes</h2>
            
            {qrCodes.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No QR codes generated yet</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {qrCodes.map((qr) => (
                  <div key={qr.id} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                    <div className="flex items-center space-x-3">
                      <img
                        src={qr.dataURL}
                        alt="QR Code"
                        className="w-12 h-12 border border-gray-300 rounded"
                      />
                      <div>
                        <p className="text-sm font-medium truncate max-w-48">
                          {qr.content}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(qr.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteQRCode(qr.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}