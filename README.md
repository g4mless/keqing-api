# Keqing API

A simple REST API that serves a collection of Keqing artwork images with random selection capability.

## Features

- **GET `/all`** - Returns all 89 curated Keqing images with their source attribution
- **GET `/gacha`** - Returns a random Keqing image
- **GET `/healthcheck`** - Health check endpoint

## Setup

```bash
# Install dependencies
bun install

# Development server (with auto-reload)
bun run dev

# Build for production
bun build src/index.ts --outdir=dist

# Run production build
bun start
```

Server runs on `http://localhost:3000`

## Stack

- **Runtime:** Bun
- **Framework:** Elysia
- **Language:** TypeScript
- **CORS:** Enabled

## Image Storage

Images are hosted on Supabase Storage with original artwork sources credited in the JSON metadata.
