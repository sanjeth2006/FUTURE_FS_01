# 🚀 GitHub Pages Deployment Guide

To deploy your site to GitHub Pages, follow these simple steps:

## 1. Verify Configuration (Done)
- **Repo URL**: `https://github.com/sanjeth2006/FUTURE_FS_01`
- **Base Path**: `/FUTURE_FS_01/` (configured in `vite.config.js`)
- **Homepage**: `https://sanjeth2006.github.io/FUTURE_FS_01` (set in `package.json`)

## 2. Deploy Command
Run the following command in your terminal:

```bash
npm run deploy
```

This will automatically build your project and push it to the `gh-pages` branch on GitHub.

## 3. Verify Deployment
After a few minutes, your site will be live at:
**[https://sanjeth2006.github.io/FUTURE_FS_01](https://sanjeth2006.github.io/FUTURE_FS_01)**

## Troubleshooting
If seeing a 404 error:
- Go to your repository **Settings > Pages**.
- Ensure **Source** is set to `Deploy from a branch`.
- Ensure **Branch** is set to `gh-pages` / `(root)`.
