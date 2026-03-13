#!/bin/bash
# Script to update GitHub release with proper release notes

VERSION=${1:-"0.1.0"}
TAG="v${VERSION}"

echo "Updating release ${TAG}..."

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed."
    echo "Install it from: https://cli.github.com/"
    echo ""
    echo "Or update the release manually at:"
    echo "https://github.com/VoxHash/qr-code-generator/releases/edit/${TAG}"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "Not authenticated with GitHub CLI."
    echo "Run: gh auth login"
    exit 1
fi

# Update release with notes from file
gh release edit "${TAG}" \
  --title "Release ${TAG}" \
  --notes-file .github/workflows/release-notes.md

if [ $? -eq 0 ]; then
    echo "✅ Release ${TAG} updated successfully!"
    echo "View at: https://github.com/VoxHash/qr-code-generator/releases/tag/${TAG}"
else
    echo "❌ Failed to update release. Try updating manually:"
    echo "https://github.com/VoxHash/qr-code-generator/releases/edit/${TAG}"
fi
