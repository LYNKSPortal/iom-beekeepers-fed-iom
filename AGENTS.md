<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Browser compatibility

- iOS 15 Safari is a client requirement. Keep Tailwind 3 and its PostCSS pipeline; Tailwind 4 requires newer Safari.
- Tailwind configuration lives in `.devin/tailwind.config.cjs`. Keep `tailwind-merge` on the Tailwind 3-compatible major (v2).
- Server-rendered text, images and lists must be visible without animation initialization. Do not hide initial content with opacity, off-screen transforms or clip paths.
- Provide `vh` fallbacks for `svh` and avoid unguarded `color-mix()` or native CSS cascade layers.
- Verify changes with `npm run build` and `npm run lint`. Actual iOS 15 device testing is still required before claiming device compatibility.
