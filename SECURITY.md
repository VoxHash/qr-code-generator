# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please do not** open a public GitHub issue for security vulnerabilities.

Instead, please email security details to: **contact@voxhash.dev**

Include the following information:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### What to Expect

- We will acknowledge receipt within 48 hours
- We will provide an initial assessment within 7 days
- We will keep you informed of our progress
- We will notify you when the vulnerability is fixed

### Disclosure Policy

- We will work with you to understand and resolve the issue quickly
- We will credit you for the discovery (unless you prefer to remain anonymous)
- We will not take legal action against security researchers acting in good faith

## Security Best Practices

When using QR Code Generator:

- Keep dependencies up to date
- Use environment variables for sensitive configuration
- Never commit `.env` files to version control
- Use strong database passwords
- Enable HTTPS in production
- Regularly review and update access controls

## Known Security Considerations

- API endpoints should be rate-limited in production
- Database connections should use secure credentials
- CORS should be properly configured for production
- Input validation is implemented but should be reviewed for your use case
