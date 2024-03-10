import express from "express";
import { cekApikey, limitApikey } from "../../Utils/apikey.js"
import { hentai } from "../../Utils/scapers/all-in-one/scapers.js";

const router = express.Router();

router.get('/api/internet/hentai', cekApikey, async(req, res) => {
    try {
        const q = req.query.q;

        if (!q) return res.json(global.mess.need.q);

        const data = await pinterest(q);

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
