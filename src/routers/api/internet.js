import express from "express";
import { cekApikey, limitApikey } from "../../Utils/apikey.js"
import { hentai } from "../../Utils/scapers/all-in-one/scapers.js";

const router = express.Router();

router.get('/api/internet/hentai', cekApikey, async (req, res) => {
    try {
        const query = req.query.query;

        if (!query) return res.json({ status: false });

        const data = await hentai(query);

        res.json({
            creator,
            status: true,
            result: data
        });
    } catch (error) {
        console.error(error);
        res.json(mess.error);
    }
})

export default router; 
