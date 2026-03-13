# Contributing to QR Code Generator

Thanks for helping improve QR Code Generator! We welcome contributions from the community.

## Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Development Setup

### Prerequisites

- Node.js 18+ 
- Docker and Docker Compose (optional, for database)
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/VoxHash/qr-code-generator.git
cd qr-code-generator

# Setup Backend
cd backend
npm install
cp .env.example .env  # Create .env file with your database URL
npm run db:generate
npm run db:push

# Setup Frontend
cd ../frontend
npm install
cp .env.example .env.local  # Create .env.local with API URL
```

### Running the Application

**Option 1: Docker Compose (Recommended)**
```bash
docker-compose up --build
```

**Option 2: Local Development**
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

### Running Tests

```bash
# Frontend linting
cd frontend
npm run lint

# Frontend build check
cd frontend
npm run build
```

## Branching & Commit Style

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `chore/description` - Maintenance tasks
- `refactor/description` - Code refactoring

### Commit Messages
We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add batch QR code generation
fix: resolve image optimization warning
docs: update API documentation
```

## Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Link related issues** in your PR description
3. **Add tests** if applicable
4. **Update documentation** for any new features or API changes
5. **Follow the PR template** in `.github/PULL_REQUEST_TEMPLATE.md`
6. **Keep diffs focused** - one feature or fix per PR
7. **Ensure linting passes** - run `npm run lint` before submitting

### PR Checklist

- [ ] Code follows the existing style
- [ ] Tests added/updated (if applicable)
- [ ] Documentation updated
- [ ] Lint passes locally
- [ ] Build succeeds
- [ ] No breaking changes (or documented if intentional)

## Development Guidelines

- Follow the existing code style
- Use TypeScript for frontend code
- Add error handling for API calls
- Include proper TypeScript types
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

## Release Process

- We use [Semantic Versioning](https://semver.org/)
- Update [CHANGELOG.md](CHANGELOG.md) with all changes
- Tag releases with version numbers (e.g., `v0.1.0`)

## Questions?

- Open an issue for questions or discussions
- Check [SUPPORT.md](SUPPORT.md) for support options
- Contact: contact@voxhash.dev
