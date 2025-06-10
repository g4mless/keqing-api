const express = require('express')
const app = express()
const port = 5500
const cors = require('cors')

const baseURL = 'https://dgolbn4rrbixbcll.public.blob.vercel-storage.com';

const files = [
    {filename:'keqing-bouquet.webp', source: 'https://www.pixiv.net/en/artworks/124469294'},
    {filename:'keqing-looktoviewer2.webp', source: 'https://x.com/fal_maro/status/1835272406103121967'},
    {filename:'keqing-lovesmile.webp', source: 'https://x.com/tyenka7728/status/1625419589508124674'},
    {filename:'keqing-casual.webp', source: 'https://www.zerochan.net/3555637'},
    {filename:'keqing-portrait.webp', source: 'https://www.pixiv.net/artworks/97767520'},
    {filename:'keqing-landscape.webp', source: 'https://danbooru.donmai.us/posts/4183543'},
    {filename:'keqing-oneeyeclosed.webp', source: 'https://www.pixiv.net/artworks/99030313'},
    {filename:'keqing-looktoviewer.webp', source: 'https://x.com/ringozaka_0913/status/1812817203080974838'},
    {filename:'keqing-blushingcasual.webp', source: 'https://x.com/tozi526/status/1858888140146254273'},
    {filename:'keqing-holdingsword.webp', source:'https://danbooru.donmai.us/posts/5992435'},
    {filename:'keqing-gloom.webp', source: 'https://www.pixiv.net/en/artworks/86046891'},
    {filename:'keqing-brush.webp', source: 'https://x.com/redi_rkgk/status/1328877046412537858'},
    {filename:'keqing-umbrella.webp', source: 'https://www.pixiv.net/en/artworks/118174964'},
    {filename:'keqing-umbrella2.webp', source: 'https://danbooru.donmai.us/posts/7496493'},
    {filename:'keqing-headrest.webp', source: 'https://x.com/_luna610/status/1706959678205579453'},
    {filename:'keqing-kimono.webp', source: 'https://safebooru.org/index.php?page=post&s=view&id=5506434'},
    {filename:'keqing-sit.webp', source:'https://www.pixiv.net/en/artworks/106623085'},
    {filename:'keqing-see1.webp', source: 'https://www.pixiv.net/en/artworks/102934427'},
    {filename:'keqing-see2.webp', source: 'https://www.pixiv.net/en/artworks/102934427'},
    {filename:'keqing-ptrt2.webp', source: 'https://www.pixiv.net/artworks/109266324'},
    {filename:'keqing-blinking.webp', source: 'https://x.com/ebibi_chiriri/status/1578037551717580800'},
    {filename:'keqing-ptrt1.webp', source: 'https://www.pixiv.net/en/artworks/126377588'},
    {filename:'keqing-aura.webp', source: 'https://www.pixiv.net/en/artworks/130066464'},
    {filename:'keqing-wet.webp', source: 'https://x.com/mar_R_o/status/1727111162284986484'},
    {filename:'keqing-wp1.webp', source: 'https://www.pixiv.net/en/artworks/87977897'},
    {filename:'keqing-wp2.webp', source: 'https://www.pixiv.net/en/artworks/90015173'},
    {filename:'keqing-baloon.webp', source: 'https://x.com/aoirooto/status/1768200404641153087'}
];

app.get("/", (req, res) => {
    res.send('Keqing API')
})

app.get("/keqing", (req, res) => {
    const result = files.map(file => ({
        url: `${baseURL}/${file.filename}`,
        source: file.source
    }));
    res.json(result)
});

app.get("/keqing/gacha", (req, res) => {
    const random = files[Math.floor(Math.random() * files.length)]
    res.json(`${baseURL}/${random}`)
});

app.listen(port, () => {
    console.log(`Run at port ${port}`)
})

app.use(cors())

module.exports = app