<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# HireLoop

Single Next.js 16 App Router app (not a monorepo). `CLAUDE.md` is just `@AGENTS.md` — this file is the one source of instructions.

## Commands

- `npm run dev` — dev server
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`)
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` — Prettier over `**/*.{ts,tsx}` only (not md/json)
- `npm run build` — production build

**There is no test runner and no CI** (`npm test` does not exist). The only verification gate is local: `npm run format && npm run lint && npm run typecheck`, plus `npm run build` for risky changes. Prettier is not wired into ESLint — run `format` separately.

## Next.js 16 specifics

- Docs for this exact version ship in `node_modules/next/dist/docs/` — consult them before using unfamiliar Next APIs (see block above).
- Path alias: `@/*` resolves to the repo root (`tsconfig.json`).

## Stack quirks (differs from defaults)

- **shadcn/ui on Base UI**: `components.json` uses style `base-nova` backed by `@base-ui/react`, **not Radix**. Add components with `npx shadcn@latest add <name>`; they land in `components/ui/`.
- **`cn`** comes from the npm `cn` package, re-exported by `lib/utils.ts` — do not add `clsx`/`tailwind-merge`.
- **Tailwind v4** via `@tailwindcss/postcss`; no tailwind config file — theming is CSS-first in `app/globals.css`.
- **Prettier style**: no semicolons, double quotes, class sorting via `prettier-plugin-tailwindcss` (`cn`/`cva` listed in `tailwindFunctions`). Match it; `npm run format` won't touch `.md`/`.json`.

## Auth (better-auth + MongoDB) — early-stage WIP

- `lib/auth.ts` uses a hardcoded `mongodb://localhost:27017/database` (db `hireloopdb`) — local MongoDB must be running; no env override exists.
- `.env` (gitignored) provides `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL`. `lib/auth.ts` also reads `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` for Google sign-in — not set locally, so social login will fail until added.
- Only `NEXT_PUBLIC_*` vars reach the browser: `process.env.BETTER_AUTH_URL` in `lib/auth-client.ts` is `undefined` client-side. The default origin works in dev.
- Catch-all route handler: `app/api/auth/[...all]/route.ts`.
