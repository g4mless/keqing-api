import { Elysia } from "elysia"
import { cors } from '@elysiajs/cors'
import imagesJson from '../index.json'

type KeqingImage = { filename: string; source: string }

const files: KeqingImage[] = imagesJson as KeqingImage[]
const baseURL = 'https://rrddcemyrcmrmpjnysgb.supabase.co/storage/v1/object/public/keq/keqing-'

export default new Elysia().use(cors())
  .get("/", () => "Keqing API")

  .get('/all', () => {
    return [...files].reverse().map((file) => ({
      url: `${baseURL}${file.filename}`,
      source: file.source
    }))
  })
  
  .get('/gacha', () => {
    const random = files[Math.floor(Math.random() * files.length)]
    return {
      url: `${baseURL}${random.filename}`,
      source: random.source
    }
  })