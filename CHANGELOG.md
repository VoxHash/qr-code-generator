# Changelog — QR Code Generator

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Docker Compose backend entrypoint waits for PostgreSQL and runs `prisma db push` on startup (no manual `docker compose exec` step)

## [0.1.1] - 2026-10-05

### Added
- Committed `backend/.env.example` and `frontend/.env.example` so documented setup works without guessing env vars
- Deployment guidance consolidated into [docs/installation.md](docs/installation.md) (Railway, Render, Vercel, Docker)

### Changed
- CI and release workflows target Node.js 24 ([d2e54de](https://github.com/VoxHash/qr-code-generator/commit/d2e54de), [5fdcee8](https://github.com/VoxHash/qr-code-generator/commit/5fdcee8))
- Documentation kit refreshed; roadmap trimmed to realistic near-term goals
- `.gitignore` tightened (env/build/IDE/OS noise) and no longer ignores useful project config templates
- Frontend npm scripts call Next.js via direct CLI paths for more reliable local/CI runs

### Fixed
- Prisma validate step supplies `DATABASE_URL` in CI ([5fdcee8](https://github.com/VoxHash/qr-code-generator/commit/5fdcee8))
- React Hook `useEffect` dependency handling and Next.js `<Image>` usage for QR previews
- Removed workstation duplicate junk files that polluted the working tree

### Removed
- `DEVELOPMENT_GOALS.md` (merged into [ROADMAP.md](ROADMAP.md))
- Standalone `docs/deployment.md` (merged into installation docs)
- Obsolete `RELEASE_INSTRUCTIONS.md` ([f7b0fc8](https://github.com/VoxHash/qr-code-generator/commit/f7b0fc8))

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
