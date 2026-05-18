# Kosh Hotel

A React + Vite hotel booking UI built with Tailwind CSS and client-side routing.

## Project setup

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

Then open the preview URL shown in the terminal.

## Deployment fix

This project now uses a relative Vite base path:

- `vite.config.js` now includes `base: './'`

That makes the built app load assets correctly when deployed to a subfolder or static host.

## Important deployment notes

### Static hosts / GitHub Pages

If you deploy to GitHub Pages or another static file host, make sure the host serves `dist/index.html` and supports client-side routing.

If the host does not support rewrites for client-side routes, use a `HashRouter` instead of `BrowserRouter` in `src/main.jsx`.

### If you still see a blank page

1. Confirm the built output is deployed from the `dist/` folder.
2. Confirm the host is serving `index.html` for application routes.
3. If the deployed app is on a path like `/repo-name/`, the current relative base path should help.

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production files
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run server` — start JSON server for `db.json`
- `npm run start:server` — start Express server from `server/index.js`
- `npm test` — run Jest tests

## Notes

- The app uses React Router for navigation.
- Image assets are loaded from Unsplash.
- The deployment build is output to `dist/`.
