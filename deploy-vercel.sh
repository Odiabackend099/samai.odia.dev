#!/bin/bash

# Add environment variables to Vercel
echo "Adding environment variables to Vercel..."

# WebSocket URL
echo "wss://vocode-agent-setup.fly.dev/ws" | vercel env add NEXT_PUBLIC_WS_URL production

# API URL  
echo "https://vocode-agent-setup.fly.dev" | vercel env add NEXT_PUBLIC_API_URL production

# Supabase URL
echo "https://lbjymlodxprzqgtyqtcq.supabase.co" | vercel env add NEXT_PUBLIC_SUPABASE_URL production

# Supabase Anon Key
echo "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxianltbG9keHByenFndHlxdGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNDk1MzEsImV4cCI6MjA3ODkyNTUzMX0.m9k-Id03Kt1scFWvIuK354EHjiO0Y-d8mbO53QqSMRU" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production

echo "✅ Environment variables added!"
echo "Now deploying to production..."

# Deploy to production
vercel --prod
