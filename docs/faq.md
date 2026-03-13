# FAQ

Frequently asked questions about QR Code Generator.

## General

### What is QR Code Generator?

QR Code Generator is a full-stack web application that allows you to create, store, and manage QR codes with a simple, intuitive interface.

### What technologies does it use?

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Express.js, Node.js
- Database: PostgreSQL with Prisma ORM
- Deployment: Docker Compose

### Is it free to use?

Yes, QR Code Generator is open-source and free to use under the MIT License.

## Installation

### Do I need Docker?

No, Docker is optional. You can run the application locally with Node.js and PostgreSQL.

### What are the system requirements?

- Node.js 18+
- PostgreSQL (or Docker for database)
- 2GB RAM minimum
- Modern web browser

### Can I use a different database?

Currently, only PostgreSQL is supported. Support for other databases may be added in the future.

## Usage

### What content can I encode?

You can encode any text, URL, or content string. Common use cases:
- URLs
- Text messages
- Contact information (vCard format)
- WiFi credentials
- Email addresses

### What sizes are supported?

QR codes can be generated in sizes from 128px to 512px. The default is 256px.

### Can I customize QR code colors?

Currently, only black and white QR codes are supported. Color customization may be added in future versions.

### How do I download QR codes?

Click the "Download" button on any generated QR code to save it as a PNG image.

## API

### Is there rate limiting?

Currently, there is no rate limiting. This should be implemented for production use.

### Do I need authentication?

Currently, the API does not require authentication. Authentication will be added for production deployments.

### Can I use the API programmatically?

Yes! See the [API Documentation](api.md) for complete API reference and examples.

## Development

### How do I contribute?

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.

### Can I add new features?

Yes! We welcome contributions. Open an issue or pull request on GitHub.

### How do I report bugs?

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) to report issues.

## Troubleshooting

### The application won't start

Check the [Troubleshooting Guide](troubleshooting.md) for common issues and solutions.

### Database connection fails

Verify PostgreSQL is running and the DATABASE_URL is correct in your `.env` file.

### Port conflicts

Change the port in your configuration or stop the conflicting service.

## Support

### Where can I get help?

- Documentation: [docs/](.)
- GitHub Issues: [GitHub](https://github.com/VoxHash/qr-code-generator/issues)
- Email: contact@voxhash.dev

### Is there a community?

Check the GitHub repository for discussions and community support.
