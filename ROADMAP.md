# Roadmap — QR Code Generator

Planned work for QR Code Generator, aligned with the current v0.1.x full-stack baseline (Next.js frontend, Express API, Prisma + PostgreSQL, Docker Compose).

## Now (v0.2.x)

Ship the highest-value product and quality gaps first:

- [ ] Custom QR styling (colors, logo overlay)
- [ ] Export formats beyond PNG (SVG first)
- [ ] Stronger input validation and user-facing error messages
- [ ] Unit/integration tests for API generate/list/delete paths
- [ ] Keep CI green (lint, frontend build, Prisma validate, Docker build)

## Next (v0.3.x)

- [ ] Batch generation
- [ ] History search/filter
- [ ] QR templates/presets
- [ ] API rate limiting for public deployments
- [ ] Authenticated multi-user QR libraries (optional accounts)

## Later

- [ ] Camera-based QR scanning
- [ ] Analytics/tracking for generated codes
- [ ] Error-correction / version controls
- [ ] i18n and theme options
- [ ] CLI package for scripting
- [ ] Mobile client (only if web usage justifies it)

## Explicitly deferred

These stay out of scope until the core generator is polished and tested:

- Real-time collaboration
- Enterprise multi-tenant billing
- Microservices / message queues
- Payment-provider campaign tooling

## Success criteria

- Documented install path works on a clean machine with Node 20+ and Docker
- API health + generate/list/delete verified in CI or release checklist
- No critical dependency vulnerabilities left untracked in SECURITY.md reports

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Ideas and bugs: [GitHub Issues](https://github.com/VoxHash/qr-code-generator/issues).
