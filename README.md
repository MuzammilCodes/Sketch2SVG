# Sketch2SVG — Frontend

Warm, handcrafted React UI for the Sketch2SVG backend API.

## Stack
- React 18 + Vite
- CSS Modules (no external UI libraries)
- Fraunces + Lora + DM Mono typefaces

## Local dev

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Environment

`.env` is pre-wired to your Render backend:

```
VITE_API_URL=https://svgconverterbackend.onrender.com
```

## Deploy to Netlify

### Option A — Netlify CLI (fastest)

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B — Netlify UI (drag & drop)

1. Run `npm run build` — produces a `dist/` folder
2. Go to https://app.netlify.com
3. Drag the `dist/` folder onto the Netlify dashboard
4. Done — your site is live ✓

### Option C — Git deploy (recommended for ongoing updates)

1. Push this folder to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Pick your repo
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variable in Netlify UI:
   - Key: `VITE_API_URL`
   - Value: `https://svgconverterbackend.onrender.com`
6. Deploy

The included `netlify.toml` handles SPA routing automatically.
