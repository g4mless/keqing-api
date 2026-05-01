import { Elysia } from "elysia"
import { cors } from '@elysiajs/cors'
import imagesJson from '../index.json'

type KeqingImage = { flnm: string; src: string }

const files: KeqingImage[] = imagesJson as KeqingImage[]
const baseURL = 'https://rrddcemyrcmrmpjnysgb.supabase.co/storage/v1/object/public/keq/keqing-'

export default new Elysia().use(cors())
  .get("/", () => "Keqing API")
  .get("/healthcheck", () => "Safe")

  .get('/all', () => {
    return [...files].reverse().map((file) => ({
      url: `${baseURL}${file.flnm}`,
      source: file.src
    }))
  })

  .get('/gacha', () => {
    const random = files[Math.floor(Math.random() * files.length)]
    return {
      url: `${baseURL}${random.flnm}`,
      source: random.src
    }
  })
