//―――――――――――――――――――――――――――――――――――――――――― ┏  Modules ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

import axios from 'axios'
import express from "express";

//―――――――――――――――――――――――――――――――――――――――――― ┏ Funtion App ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

const router = express();

async function fetchJson (url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

export default router


