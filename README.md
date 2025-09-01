# ExactName API (Vercel stub)

Minimal backend for GPT Actions. Provides two endpoints:

- `GET /api/health` → `{ "ok": true }`
- `POST /api/pipeline/run` → returns a stub decision JSON

## Quick Start (no terminal needed)
1. Create a GitHub repo named `exactname-api`.
2. Upload the files from this folder (keep the same paths).
3. On Vercel → Add New Project → Import your repo → Deploy.
4. Test:
   - https://YOUR-PROJECT.vercel.app/api/health
   - POST https://YOUR-PROJECT.vercel.app/api/pipeline/run

## Optional: API Key
- In Vercel Project → Settings → Environment Variables, add `API_KEY`.
- Uncomment the auth block in `api/pipeline/run.js`.
- Call with header: `X-API-Key: YOUR_KEY`.

## Notes
- `package.json` uses native Vercel serverless functions (no Express needed).
- Keep HTTPS URLs when using in your GPT OpenAPI `servers:` block.
