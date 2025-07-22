import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'
import type { Context } from 'hono'

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

const files: KeqingImage[] = [
    {filename:'bouquet.webp', source: 'https://www.pixiv.net/en/artworks/124469294'},
    {filename:'looktoviewer2.webp', source: 'https://x.com/fal_maro/status/1835272406103121967'},
    {filename:'lovesmile.webp', source: 'https://x.com/tyenka7728/status/1625419589508124674'},
    {filename:'casual.webp', source: 'https://www.zerochan.net/3555637'},
    {filename:'portrait.webp', source: 'https://www.pixiv.net/artworks/97767520'},
    {filename:'landscape.webp', source: 'https://danbooru.donmai.us/posts/4183543'},
    {filename:'oneeyeclosed.webp', source: 'https://www.pixiv.net/artworks/99030313'},
    {filename:'looktoviewer.webp', source: 'https://x.com/ringozaka_0913/status/1812817203080974838'},
    {filename:'blushingcasual.webp', source: 'https://x.com/tozi526/status/1858888140146254273'},
    {filename:'holdingsword.webp', source:'https://danbooru.donmai.us/posts/5992435'},
    {filename:'gloom.webp', source: 'https://www.pixiv.net/en/artworks/86046891'},
    {filename:'brush.webp', source: 'https://x.com/redi_rkgk/status/1328877046412537858'},
    {filename:'umbrella.webp', source: 'https://www.pixiv.net/en/artworks/118174964'},
    {filename:'umbrella2.webp', source: 'https://danbooru.donmai.us/posts/7496493'},
    {filename:'headrest.webp', source: 'https://x.com/_luna610/status/1706959678205579453'},
    {filename:'kimono.webp', source: 'https://safebooru.org/index.php?page=post&s=view&id=5506434'},
    {filename:'sit.webp', source:'https://www.pixiv.net/en/artworks/106623085'},
    {filename:'see1.webp', source: 'https://www.pixiv.net/en/artworks/102934427'},
    {filename:'see2.webp', source: 'https://www.pixiv.net/en/artworks/102934427'},
    {filename:'ptrt2.webp', source: 'https://www.pixiv.net/artworks/109266324'},
    {filename:'blinking.webp', source: 'https://x.com/ebibi_chiriri/status/1578037551717580800'},
    {filename:'ptrt1.webp', source: 'https://www.pixiv.net/en/artworks/126377588'},
    {filename:'aura.webp', source: 'https://www.pixiv.net/en/artworks/130066464'},
    {filename:'wet.webp', source: 'https://x.com/mar_R_o/status/1727111162284986484'},
    {filename:'wp1.webp', source: 'https://www.pixiv.net/en/artworks/87977897'},
    {filename:'wp2.webp', source: 'https://www.pixiv.net/en/artworks/90015173'},
    {filename:'baloon.webp', source: 'https://x.com/aoirooto/status/1768200404641153087'},
    {filename:'book.webp', source: 'https://danbooru.donmai.us/posts/6746285?q=keqing'},
    {filename:'trembling.webp', source: 'https://x.com/SubChocolat_0w0/status/1928997918138106204'},
    {filename:'yum.webp', source:'https://danbooru.donmai.us/posts/7028838'},
    {filename:'bnnuykemono.webp', source:'https://danbooru.donmai.us/posts/5965636'},
    {filename:'goodjob.webp', source:'https://x.com/StBeSe/status/1536935464526962688'},
    {filename:'sit2.webp', source:'https://danbooru.donmai.us/posts/8101802'},
    {filename:'looktoviewer3.webp', source:'https://www.pixiv.net/en/artworks/121830674'},
    {filename:'oneplus.webp', source:'https://www.bilibili.com/opus/892996625127964680'},
    {filename:'ocean.webp', source:'https://www.pixiv.net/en/artworks/102951371'},
    {filename:'bunchinghair.webp', source:'https://x.com/mora__ga__neee/status/1521489339951517696'},
    {filename:'sit3.webp', source:'https://x.com/fal_maro/status/1598982789491482624'},
    {filename:'gift.webp', source:'https://www.pixiv.net/en/artworks/102943690'},
];

app.get('/v1/all', (c: Context) => {
  const result = files.map(file => ({
    url: `${baseURL}/${file.filename}`,
    source: file.source
  }));
  return c.json(result)
})

app.get('/v1/gacha', (c: Context) => {
  const random = files[Math.floor(Math.random() * files.length)]
  return c.json({
    url: `${baseURL}/${random.filename}`,
    source: random.source
  })
})

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;