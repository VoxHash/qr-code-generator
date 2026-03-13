# Release Instructions

## Creating the First Release (v0.1.0)

The release tag `v0.1.0` has been created locally. To publish the release on GitHub:

### Option 1: Using the Script

```bash
./scripts/create-release.sh 0.1.0
```

This will:
1. Verify/create the tag locally
2. Push the tag to GitHub
3. Provide instructions for creating the GitHub release

### Option 2: Manual Steps

1. **Push the tag to GitHub:**
   ```bash
   git push origin v0.1.0
   ```

2. **Create the release on GitHub:**
   - Go to: https://github.com/VoxHash/qr-code-generator/releases/new
   - Select tag: `v0.1.0`
   - Title: `Release v0.1.0`
   - Copy release notes from `.github/workflows/release-notes.md`
   - Click "Publish release"

### Option 3: Using GitHub CLI

```bash
gh release create v0.1.0 \
  --title "Release v0.1.0" \
  --notes-file .github/workflows/release-notes.md
```

## Automated Release Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/release.yml`) that will automatically create releases when:

1. **Tag is pushed:**
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

2. **Manual trigger:**
   - Go to Actions → Release workflow
   - Click "Run workflow"
   - Enter version number (e.g., `0.1.0`)
   - Click "Run workflow"

## Future Releases

For future releases:

1. Update `CHANGELOG.md` with new version
2. Create and push tag:
   ```bash
   git tag -a v0.2.0 -m "Release v0.2.0"
   git push origin v0.2.0
   ```
3. The release workflow will automatically create the GitHub release

## CI/CD Workflow

The CI workflow (`.github/workflows/ci.yml`) runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

It performs:
- Linting (frontend)
- Building (frontend and backend)
- Docker image building
- Prisma schema validation
