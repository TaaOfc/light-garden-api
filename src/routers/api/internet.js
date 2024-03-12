import express from "express";
import { cekApikey, limitApikey } from "../../Utils/apikey.js"
import { bardAi, hentai, nhentai, milf} from "../../Utils/scapers/all-in-one/scapers.js";

const router = express.Router();

router.get('/api/internet/bardAi', cekApikey, async(req, res) => {
    try {
        const q = req.query.q;

        if (!q) return res.json(global.mess.need.q);

        const data = await bardAi(q);

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

router.get('/api/internet/milf', cekApikey, async(req, res) => {
  try {

        const data = await milf();

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
