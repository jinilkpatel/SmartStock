#!/bin/bash

# SmartStock Deployment Script
echo "🚀 Starting SmartStock deployment to Vercel..."

# Check if user is logged in
if ! npx vercel whoami &>/dev/null; then
    echo "📝 Please login to Vercel first..."
    npx vercel login
fi

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
npx vercel

# Ask if user wants to deploy to production
read -p "Deploy to production? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌐 Deploying to production..."
    npx vercel --prod
fi

echo "✅ Deployment complete!"

