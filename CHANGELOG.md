# Changelog — QR Code Generator

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- ESLint configuration for consistent code quality
- Next.js Image component for optimized QR code rendering
- Proper React hooks dependency management

### Changed
- Updated npm scripts to use direct CLI paths for better reliability
- Improved accessibility with ARIA roles

### Fixed
- Fixed broken npm script shims in frontend and backend
- Fixed React Hook useEffect missing dependency warning
- Fixed image optimization warnings by replacing `<img>` with Next.js `<Image>`

## [0.1.0] - 2026-03-12

### Added
- Initial release
- Full-stack QR code generator with Next.js frontend
- Express.js backend API with Prisma ORM
- PostgreSQL database integration
- Docker Compose setup for easy deployment
- QR code generation with customizable size (128px - 512px)
- QR code history management
- Download QR codes as PNG images
- Responsive web interface with Tailwind CSS
- RESTful API endpoints for QR code operations
