# Interview Prep Hub

A React + Vite + TypeScript note browser designed for coding interview preparation.

## Features

- Load markdown notes from a local `notes/` folder
- Build-time index generation into `src/data/notes-index.json`
- Search with Fuse.js across topics and problems
- Problem pages rendered with React Markdown and code syntax highlighting
- Review tracking, favorites, revision status, spaced repetition, and recent activity
- Responsive sidebar, mobile drawer, dark mode, and clean typography
- Built for GitHub Pages with `docs/` output

## Setup

```bash
cd interview-prep-hub
npm install
npm run dev
```

Open the app at `http://localhost:4173`.

## Build

```bash
npm run build
```

The production site will be generated into the `docs/` folder.

## GitHub Pages Deployment

### Option 1: Deploy from `docs/`

1. Run `npm run build`.
2. Commit the `docs/` folder to your repository.
3. In GitHub repository settings, enable Pages from the `main` branch and `docs/` folder.
4. Visit the published URL after deployment.

### Option 2: Use a separate GitHub Pages branch

1. Run `npm run build`.
2. Push the `docs/` folder contents to a `gh-pages` branch.
3. In GitHub Pages settings, choose the `gh-pages` branch as the deployment source.

## Notes Source

- Draft notes inside the `notes/` folder.
- Run `npm run build:notes` to regenerate `src/data/notes-index.json` and copy markdown into static `public/notes/`.
- To create markdown stubs from an existing Grokking folder structure without overwriting existing notes, run:

```bash
npm run migrate:notes -- ../Grokking
```

If your source folder is in a different location, pass it as the first argument:

```bash
node scripts/migrate-grokking-notes.js /path/to/Grokking
```
