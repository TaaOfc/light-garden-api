import express from "express";
import { cekApikey, limitApikey } from "../../Utils/apikey.js"
import { hentai, nhentai } from "../../Utils/scapers/all-in-one/scapers.js";

const router = express.Router();

router.get('/api/internet/hentai', cekApikey, async(req, res) => {
    try {
        const q = req.query.q;

        if (!q) return res.json(global.mess.need.q);

        const data = await hentai(q);

        if (!data) {
            return res.json({
                creator,
                status: false,
                message: "NOT FOUND"
            });
        }

        res.json({
            creator,
            status: true,
            result: data
        });
    } catch (error) {
        console.error(error);
        res.json(mess.error);
    }
});

router.get('/api/internet/nhentai', cekApikey, async(req, res) => {
    try {
        const q = req.query.q;

        if (!q) return res.json(global.mess.need.q);

        const data = await nhentai(q);

        if (!data) {
            return res.json({
                creator,
                status: false,
                message: "NOT FOUND"
            });
        }

        res.json({
            creator,
            status: true,
            result: data
        });
    } catch (error) {
        console.error(error);
        res.json(mess.error);
    }
});

router.get('/api/internet/milf', (req, res) => {
  fs.readFile('../../database/milf.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }

    const images = JSON.parse(data);
    const randomImage = images[Math.floor(Math.random() * images.length)];

    res.send({
      url: randomImage,
    });
  });
})

export default router; 
