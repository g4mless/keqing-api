const express = require('express')
const app = express()
const port = 5500

const baseURL = 'https://dgolbn4rrbixbcll.public.blob.vercel-storage.com';

const files = [
    'keqing-bouquet.webp',
    'keqing-looktoviewer2.webp',
    'keqing-lovesmile.webp',
    'keqing-casual.webp',
    'keqing-portrait.webp',
    'keqing-landscape.webp',
    'keqing-oneeyeclosed.webp',
    'keqing-looktoviewer.webp',
    'keqing-blushingcasual.webp',
    'keqing-looktoviewer.webp',
    'keqing-holdingsword.webp',
    'keqing-gloom.webp',
    'keqing-brush.webp',
    'keqing-umbrella.webp',
    'keqing-headrest.webp',
    'keqing-kimono.webp',
    'keqing-sit.webp',
    'keqing-see1.webp',
    'keqing-see2.webp',
    'keqing-ptrt2.webp',
    'keqing-blinking.webp',
    'keqing-ptrt1.webp',
    'keqing-aura.webp',
    'keqing-wet.webp',
    'keqing-wp1.webp',
    'keqing-wp2.webp',
    'keqing-baloon.webp'
];

app.get("/", (req, res) => {
    res.send('Keqing API')
})

app.get("/keqing", (req, res) => {
    const result = files.map(name => ({
        name,
        url: `${baseURL}/${name}`
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