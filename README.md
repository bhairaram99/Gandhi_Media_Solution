# GMS Next.js

Production-oriented Next.js (App Router + TypeScript) rebuild of the uploaded GaaGa WordPress UI, with reusable sections and a scalable project structure.

## Run locally

1. Install dependencies:

	npm install

2. Start dev server:

	npm run dev

3. Open:

	http://localhost:3000

## Build for production

npm run build
npm run start

## Project structure

- `public/assets/*` → copied template assets (images, icons, fonts)
- `src/app/*` → App Router pages and layout
- `src/components/layout/*` → header/footer/navigation
- `src/components/sections/*` → homepage and reusable section blocks
- `src/components/ui/*` → primitive reusable UI components
- `src/components/shared/*` → shared SEO/Breadcrumb
- `src/data/*` → content JSON files
- `src/hooks/*` → client hooks
- `src/lib/*` → constants/helpers
- `src/styles/tokens.css` → design tokens
- `src/types/*` → TypeScript interfaces

## Notes

- The migration keeps the original visual direction and section order.
- Content is currently data-driven from JSON for easy editing.
- You can connect this to WordPress REST/WPGraphQL later without changing section components.
