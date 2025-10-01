# Keqing API on Cloudflare Workers (Git-only, no Wrangler)

Overview:
- Migrated from Vercel to Cloudflare Workers without Wrangler.
- Single bundled Module Worker built from [`worker.ts`](worker.ts).
- Your Hono app code remains in [`api/index.ts`](api/index.ts) and is mounted by the Worker entry.
- Static data is bundled from [`index.json`](index.json).

Key files:
- Worker entry: [`worker.ts`](worker.ts)
  - Mounts the Hono app and redirects `/` to `/api`: [`TypeScript.worker.route()`](worker.ts:8)
  - Exports a fetch handler: [`TypeScript.export default()`](worker.ts:11)
- Hono app: [`api/index.ts`](api/index.ts)
  - Hono Tiny runtime import for Workers: [`TypeScript.import()`](api/index.ts:1)
  - CORS for API routes: [`TypeScript.app.use()`](api/index.ts:11)
  - Base path `/api`: [`TypeScript.new Hono().basePath()`](api/index.ts:9)
  - Endpoints: [`TypeScript.app.get()`](api/index.ts:13), [`TypeScript.app.get()`](api/index.ts:23), [`TypeScript.app.get()`](api/index.ts:31)
  - Exports the app to be mounted by the Worker: [`TypeScript.export default()`](api/index.ts:43)
- Build config and scripts: [`package.json`](package.json)
  - Bundles to `dist/` via esbuild: [`JSON.scripts.build`](package.json:7)

Endpoints (after deploy):
- GET /api
- GET /api/v1/all
- GET /api/v1/gacha

Deploy to Cloudflare Workers via Git (no Wrangler):
1. Push this repository to your remote (GitHub/GitLab/Bitbucket).
2. Cloudflare Dashboard → Workers & Pages → Workers → Create application → Deploy from Git.
3. Connect the repo and select the branch.
4. Build settings:
   - Build command: `npm ci && npm run build`
   - Build output directory: `dist`
   - The build produces a single module script that exports a fetch handler. Cloudflare will deploy it as a Worker (no wrangler.toml needed).
5. Environment variables/bindings: Not required for this project.
6. Deploy. After the first deploy, visit your Worker URL:
   - https://your-worker.subdomain.workers.dev/api
   - https://your-worker.subdomain.workers.dev/api/v1/all
   - https://your-worker.subdomain.workers.dev/api/v1/gacha

Notes:
- The previous Pages entry [`_worker.ts`](_worker.ts) is not used for Workers and can be deleted to avoid confusion.
- No Node.js APIs (like `fs`) are used; JSON is bundled at build time.
- Hono Tiny (`hono/tiny`) minimizes bundle size for Workers.

Local development (optional):
- Rely on Git deploys and Cloudflare preview deployments per commit. No local runtime or Wrangler is required.
