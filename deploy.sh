#!/usr/bin/env bash
set -euo pipefail

APP_NAME="frenocar-website"

echo "==> Pulling latest changes..."
git pull

echo "==> Installing dependencies..."
pnpm install --frozen-lockfile

echo "==> Building Next.js app..."
pnpm build

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
