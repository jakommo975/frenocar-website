#!/usr/bin/env bash
set -euo pipefail

APP_NAME="frenocar-website"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$SCRIPT_DIR"

echo "==> Pulling latest changes..."
git pull

echo "==> Installing dependencies..."
npm ci

echo "==> Building Next.js app..."
npm run build

if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  echo "==> Reloading $APP_NAME (zero-downtime)..."
  pm2 reload ecosystem.config.js
else
  echo "==> Starting $APP_NAME..."
  pm2 start ecosystem.config.js
fi

pm2 save

echo "==> Deploy complete. Current status:"
pm2 status "$APP_NAME"
