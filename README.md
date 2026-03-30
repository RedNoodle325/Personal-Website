# Personal Website

An Astro static site with Tailwind CSS, deployable to Cloudflare Workers.

## Local Development

```sh
bun install       # Install dependencies
bun dev           # Start dev server at localhost:4321
bun build         # Build production site to ./dist/
bun preview       # Preview the build locally
```

## Deploying to Cloudflare Workers

This project uses [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) via `wrangler.jsonc`.

### Prerequisites

1. A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works)
2. Log in to Cloudflare:
   ```sh
   bunx wrangler login
   ```

### First Deploy

```sh
bun build
bunx wrangler deploy
```

Wrangler will upload the `./dist/` directory as static assets and give you a `*.workers.dev` URL.

### Subsequent Deploys

Same two commands:

```sh
bun build
bunx wrangler deploy
```

### Custom Domain

1. Go to **Cloudflare Dashboard > Workers & Pages > your worker > Settings > Domains & Routes**
2. Click **Add Custom Domain** and enter your domain
3. Your domain must be on Cloudflare DNS (either registered through Cloudflare or with nameservers pointed to Cloudflare)

### Configuration

The `wrangler.jsonc` file controls the deployment:

```jsonc
{
  "name": "hackazak",          // Worker name — change this to your preferred name
  "compatibility_date": "2026-03-30",
  "assets": {
    "directory": "./dist"      // Built output served as static files
  }
}
```

Change `"name"` to rename your Worker (this affects the `*.workers.dev` subdomain).
