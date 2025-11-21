#!/bin/bash

# Vercel DNS Setup Script for odia.dev Google Workspace
# This script adds the required Google Workspace DNS records to Vercel

VERCEL_TOKEN="qAoRgUoM1VxNZESXb5XNPWW4"
DOMAIN="odia.dev"

echo "🚀 Adding Google Workspace DNS records to Vercel for $DOMAIN"
echo ""

# Function to add DNS record
add_record() {
    local type=$1
    local name=$2
    local value=$3
    local priority=$4
    
    if [ "$type" == "MX" ]; then
        curl -X POST "https://api.vercel.com/v4/domains/$DOMAIN/records" \
          -H "Authorization: Bearer $VERCEL_TOKEN" \
          -H "Content-Type: application/json" \
          -d "{\"type\":\"$type\",\"name\":\"$name\",\"value\":\"$value\",\"mxPriority\":$priority}" \
          -s | jq -r '.name // .error.message'
    else
        curl -X POST "https://api.vercel.com/v4/domains/$DOMAIN/records" \
          -H "Authorization: Bearer $VERCEL_TOKEN" \
          -H "Content-Type: application/json" \
          -d "{\"type\":\"$type\",\"name\":\"$name\",\"value\":\"$value\"}" \
          -s | jq -r '.name // .error.message'
    fi
}

echo "Adding MX records..."
add_record "MX" "@" "ASPMX.L.GOOGLE.COM" 1
add_record "MX" "@" "ALT1.ASPMX.L.GOOGLE.COM" 5
add_record "MX" "@" "ALT2.ASPMX.L.GOOGLE.COM" 5
add_record "MX" "@" "ALT3.ASPMX.L.GOOGLE.COM" 10
add_record "MX" "@" "ALT4.ASPMX.L.GOOGLE.COM" 10

echo ""
echo "Adding SPF record..."
add_record "TXT" "@" "v=spf1 include:_spf.google.com ~all" 0

echo ""
echo "✅ DNS records added!"
echo ""
echo "⏰ Wait 10-30 minutes for DNS propagation."
echo "📧 Then test by sending email to hello@odia.dev"
echo ""
echo "To verify MX records are live, run:"
echo "  dig MX odia.dev"
echo ""
echo "Next steps:"
echo "1. Complete Google Workspace signup at https://workspace.google.com"
echo "2. Add TXT verification record when prompted (see google_workspace_setup.md)"
echo "3. Create email accounts in Google Admin Console"
