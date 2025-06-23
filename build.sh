#!/bin/bash
# Force npm instead of yarn for build process
echo "Forcing npm for build process..."

# Disable yarn by creating empty config
echo "{}" > .yarnrc.yml
rm -f yarn.lock

# Install with npm
echo "Installing dependencies with npm..."
npm ci || npm install --no-package-lock

# Build the project
echo "Building the project..."
npm run build

exit $?
