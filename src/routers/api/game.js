import express from "express";
import fetchJson from "../../lib/myfunc.js"
import { cekApikey, limitApikey } from "../../Utils/apikey.js"

const router = express.Router();

router.get('/api/game/tebakkata', cekApikey, async(req, res) => {
    let ra = await fetchJson('https://raw.githubusercontent.com/AlipBot/data-rest-api/main/tebakgame.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
  res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
});

export default router;
