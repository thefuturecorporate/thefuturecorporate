#!/bin/bash
# Trigger Cloudflare Pages rebuild by updating a timestamp file
# This runs daily via cron to pick up newly auto-generated blog pages

cd /Users/avinashchate/thefuturecorporate || exit 1

# Update timestamp
echo "Last rebuild: $(date -u '+%Y-%m-%dT%H:%M:%SZ')" > public/last-rebuild.txt

# Stage, commit, push
git add public/last-rebuild.txt
git commit -m "Auto-rebuild: pick up new blog pages [$(date '+%Y-%m-%d')]" --no-verify 2>/dev/null

# Only push if there was a new commit
if [ $? -eq 0 ]; then
  git push origin main 2>/dev/null
fi
