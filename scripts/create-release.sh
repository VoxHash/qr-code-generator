#!/bin/bash
# Script to create a GitHub release for QR Code Generator

set -e

VERSION=${1:-"0.1.0"}
TAG="v${VERSION}"

echo "Creating release ${TAG}..."

# Check if tag exists
if git rev-parse "${TAG}" >/dev/null 2>&1; then
    echo "Tag ${TAG} already exists locally"
else
    echo "Creating tag ${TAG}..."
    GIT_AUTHOR_EMAIL="15043788+VoxHash@users.noreply.github.com" \
    GIT_COMMITTER_EMAIL="15043788+VoxHash@users.noreply.github.com" \
    git tag -a "${TAG}" -m "Release ${TAG}"
fi

# Push tag to remote
echo "Pushing tag to remote..."
git push origin "${TAG}"

echo ""
echo "✅ Release tag ${TAG} has been pushed!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/VoxHash/qr-code-generator/releases/new"
echo "2. Select tag: ${TAG}"
echo "3. Use the release notes from .github/workflows/release-notes.md"
echo "4. Click 'Publish release'"
echo ""
echo "Or use GitHub CLI:"
echo "gh release create ${TAG} --title 'Release ${TAG}' --notes-file .github/workflows/release-notes.md"
