import express from "express";
import { cekApikey, limitApikey } from "../../Utils/apikey.js"
import { tebakkata } from "../../Utils/scapers/all-in-one/scapers.js";

const router = express.Router();

router.get('/api/game/tebakkata', cekApikey, async(req, res) => {
    try {
        const q = req.query.q;

        if (!q) return res.json(global.mess.need.q);

        const data = await tebakkata(q);

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

export default router;
