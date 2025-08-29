import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'
import type { Context } from 'hono'
import fs from 'fs'

const app = new Hono().basePath('/api')

app.use(cors())

app.get('/', (c) => {
  return c.text('Keqing API')
})

const baseURL: string = 'https://dgolbn4rrbixbcll.public.blob.vercel-storage.com/keqing-';

interface KeqingImage {
    filename: string;
    source: string;
}

const keqingImages: KeqingImage[] = JSON.parse(
  fs.readFileSync(new URL('../index.json', import.meta.url), 'utf8')
)


const files: KeqingImage[] = keqingImages;

app.get('/v1/all', (c: Context) => {
  const result = files.map(file => ({
    url: `${baseURL}${file.filename}`,
    source: file.source
  }));
  return c.json(result)
})

app.get('/v1/gacha', (c: Context) => {
  const random = files[Math.floor(Math.random() * files.length)]
  return c.json({
    url: `${baseURL}${random.filename}`,
    source: random.source
  })
})

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;