# Clipora – Premium YouTube Downloader

Clipora is a high-performance, SEO-optimized YouTube video downloader built with Next.js and Node.js.

## Features
- **Fast Metadata Fetching**: Instant video details retrieval using `yt-dlp`.
- **Premium UI**: Dark mode, glassmorphism, and neon accents inspired by Spotify & YouTube Studio.
- **SEO Optimized**: Dynamic metadata, sitemaps, robots.txt, and programmatic SEO pages.
- **Blog System**: Automated SEO-rich articles for ranking.
- **Responsive**: Fully optimized for mobile and desktop.

## Tech Stack
- **Frontend**: Next.js (App Router), TailwindCSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express, TypeScript, `yt-dlp-exec`.
- **Infrastructure**: Designed for Vercel (Frontend) and Railway/Render (Backend).

## Setup Instructions

### Backend
1. `cd backend`
2. `npm install`
3. Create `.env` file:
   ```env
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   ```
4. `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
4. `npm run dev`

## 🚀 Deployment Guide

For a detailed, step-by-step walkthrough with screenshots and environment variable setup, please refer to our **[Easy Deployment Guide](file:///C:/Users/psydu/.gemini/antigravity/brain/30b0e0c3-e51f-4f5f-b95b-e3e5e66f6413/deployment_guide.md)**.

### Quick Start (Vercel)
1. Push your code to **GitHub**.
2. Go to **Vercel** and import the `frontend` folder.
3. Add `NEXT_PUBLIC_API_URL` to your environment variables.
4. Click **Deploy**.
### Quick Start (Railway)
1. Push your code to **GitHub**.
2. Connect to **Railway** and import the `backend` folder.
3. Ensure `yt-dlp` is available in your environment.
4. Click **Deploy**.

## Legal Note
This tool is for educational purposes. Users are responsible for ensuring they have the rights to download content. Avoid copyright infringement.
