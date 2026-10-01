# Vipin — Product Designer Portfolio

A responsive React + Vite portfolio for Vipin Kumar, featuring product-design case studies for Solaris, Feedbick, and PRM Go.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- pnpm

## Requirements

- Node.js 22+
- pnpm 10+

## Run locally

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Then open the local URL shown by Vite (normally `http://localhost:5173/`).

## Verify the project

Type-check the source:

```bash
pnpm run typecheck
```

Create a production build:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

Run the full check:

```bash
pnpm run check
```

## Deployment

The production output is created in `dist/` and can be deployed to any static hosting provider.

### GitHub Pages

The repository includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

It builds the site and deploys `dist/` to GitHub Pages whenever changes are pushed to `main`.

The workflow automatically sets the Vite base path to the repository name.

After pushing the repository:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Push to `main` and let the workflow deploy the site.

### Other hosting providers

For Netlify, Vercel, Hostinger, or another static host, use:

```bash
pnpm install
pnpm run build
```

Upload/deploy the generated `dist/` directory according to the hosting provider's instructions.

For a site hosted at the domain root, no `VITE_BASE_PATH` setting is required.

For a site hosted below a subdirectory, build with:

```bash
VITE_BASE_PATH=/your-subdirectory/ pnpm run build
```

## Project images

Portfolio images are stored in:

```text
public/assets/solaris/
public/assets/feedback/
public/assets/prm-go/
```

Project image references are centralized in:

```text
src/data/projects/solaris.ts
src/data/projects/feedback.ts
src/data/projects/prm-go.ts
```

Replace an image using the same filename when you want to update an existing visual without changing the source code.

## Project structure

```text
src/
├── components/
│   ├── case-study/
│   ├── layout/
│   ├── navigation/
│   └── ui/
├── data/
│   └── projects/
├── navigation/
├── pages/
│   └── projects/
├── styles/
├── App.tsx
└── main.tsx

public/
└── assets/

.github/
└── workflows/
```

## License

This repository contains personal portfolio work and project materials. Do not reuse portfolio assets or case-study content without permission.
