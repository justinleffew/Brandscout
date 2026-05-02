# Brand Scout MVP

Private Next.js + Supabase internal tool for Nicole to discover, enrich, pitch, and track brand deals.

## Env vars
- OPENAI_API_KEY
- SERPAPI_API_KEY or TAVILY_API_KEY
- FIRECRAWL_API_KEY (optional)
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REDIRECT_URI
- GMAIL_FROM_EMAIL

## Local run
1. `npm install`
2. `npm run dev`
3. Apply migration in `supabase/migrations/202605020001_brand_scout.sql`
4. Seed with `supabase/seed.sql`

## Supabase connect
Use anon URL/key on client and service role key server-side for agent writes.

## Gmail connect
`/api/gmail/connect` checks OAuth env and returns auth mode. App supports manual send fallback when Gmail is not configured.

## Real vs mocked
- Real: Next.js pages/routes, schema, workflow agents, follow-up logic, dedupe rules.
- Mocked: search/web fetch/LLM/email provider behavior unless API keys/provider implementations are added.
