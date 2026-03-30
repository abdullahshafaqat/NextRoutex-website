# Next Route Website Frontend

A fully structured Next.js 16 App Router frontend.

## Project Structure

```text
app/
	globals.css
	layout.tsx
	page.tsx

src/
	assets/
	components/
		layout/
			site-footer.tsx
			site-header.tsx
	config/
		site.ts
	features/
		home/
			components/
				home-page.tsx
	lib/
	types/
		navigation.ts
```

## Structure Rules

- Keep route entry files inside app.
- Keep domain-specific UI and logic in src/features.
- Keep reusable UI in src/components.
- Keep constants and app-level settings in src/config.
- Keep shared types in src/types.
- Keep utility helpers in src/lib.

## Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint

## Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open http://localhost:3000
