import { Elysia } from "elysia"
import { cors } from '@elysiajs/cors'
import imagesJson from '../index.json'
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker'

type KeqingImage = { filename: string; source: string }

const files: KeqingImage[] = imagesJson as KeqingImage[]
const baseURL = 'https://rrddcemyrcmrmpjnysgb.supabase.co/storage/v1/object/public/keq/keqing-'

const app = new Elysia({adapter: CloudflareAdapter}).use(cors()).listen(3000)
  .get("/", () => "Keqing API")

  .get('/all', () => {
    const result = [...files].reverse().map((file) => ({
      url: `${baseURL}${file.filename}`,
      source: file.source
    }))
    return { result }
  })
  
  .get('/gacha', () => {
    const random = files[Math.floor(Math.random() * files.length)]
    return {
      url: `${baseURL}${random.filename}`,
      source: random.source
    }
  })
  .compile()
console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
