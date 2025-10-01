import { Hono } from 'hono/tiny'
import { cors } from 'hono/cors'
import type { Context } from 'hono'

// Keep the API code here so it's reusable from the Worker entry.
type KeqingImage = { filename: string; source: string }

// Bundle JSON at build time (no fs in Workers)
import imagesJson from '../index.json'
const files: KeqingImage[] = imagesJson as KeqingImage[]

const baseURL: string = 'https://rrddcemyrcmrmpjnysgb.supabase.co/storage/v1/object/public/keq/keqing-'

const app = new Hono().basePath('/api')

app.use(cors())

app.get('/', (c) => c.text('Keqing API'))

app.get('/v1/all', (c: Context) => {
  const result = files.map((file) => ({
    url: `${baseURL}${file.filename}`,
    source: file.source
  }))
  return c.json(result)
})

app.get('/v1/gacha', (c: Context) => {
  const random = files[Math.floor(Math.random() * files.length)]
  return c.json({
    url: `${baseURL}${random.filename}`,
    source: random.source
  })
})

export default app