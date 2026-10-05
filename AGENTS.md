# 6thzone — Base44 dev environment

## What this is
A Vite + React single-page marketing homepage for **6thzone** (brand spelled exactly
"6thzone", lowercase). The repo originally contained no code — the app was scaffolded
by Base44 on branch `base44/setup-*`.

## How it runs
- `docker compose -f docker-compose.base44.yml up -d` — single `web` service on `node:22`,
  bind-mounted repo, `npm install` then `vite` dev server on container port 5173 → host 3000.
- Healthcheck: node fetch of `http://127.0.0.1:5173/`.
- `allowedHosts: true` in vite.config.js + `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env passthrough
  so the preview proxy hosts are accepted.

## Key assets
- `public/img/reference.png` — the original design reference screenshot (941×1672).
- `public/img/hero-city.jpg` — clean street-level crop (640×273, source rect x0-640 y465-738)
  of the reference with NO inpainting — the user found inpainted areas visually broken
  and asked to remove them. Do not reintroduce OpenCV inpainting; if the hero needs a
  different look, crop another text-free region of reference.png instead.

## Verify
- `curl http://localhost:3000/` returns the Vite dev index (react-refresh modules = live source, not a prebuilt bundle).
- Sections: Hero, Idea (#about), Solutions (#solutions), Approach (#approach), Insights (#insights), CTA (#contact).
