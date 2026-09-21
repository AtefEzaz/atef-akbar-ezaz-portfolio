# Atef Akbar Ezaz — Portfolio

Personal portfolio built with **React + TypeScript + Vite + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo you just pushed.
2. Vercel auto-detects Vite — leave the defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Click **Deploy**. Every future push to `main` redeploys automatically.

## Editing your content

Everything you'll want to update lives in `src/data/`:

- `profile.ts` — name, tagline, bio, contact links
- `skills.ts` — skill groups and tags
- `projects.ts` — project cards (add a new object to the array for a new project)
- `timeline.ts` — education, experience, and highlights

Your photo is at `public/images/profile.webp` — replace it with the same filename to swap it.
