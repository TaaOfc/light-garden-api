import express from "express";
import { cekApikey, limitApikey } from "../../Utils/apikey.js"
import { hentai } from "../../Utils/scapers/all-in-one/scapers.js";

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

function getDoujin(identifier) {
        const id = identifier.replace(urlToId, '$2');
        return new Promise((resolve, reject) => {
            request
                .get('https://nhentai.net/g/' + id + '/')
                .then(res => {
                    const $ = cheerio.load(res.text);
                    let details = {};
                    $('.tag-container.field-name').find('.count').each(function () {
                        const el = $(this);
                        el.text(` (${el.text()}) `);
                    });
                    $('.tag-container.field-name').text().split('\n').map(string => string.trim()).filter(u => u).map((tag, i, tags) => {
                        if (tag.endsWith(':') && !tags[i + 1].endsWith(':')) {
                            details[tag.substring(0, tag.length - 1).toLowerCase()] = tags[i + 1].replace(tagSpacerPatternn, '$1 $2').split(tagSplitPattern);
                        }
                    });
                    const title = $('#info').find('h1').text();
                    const nativeTitle = $('#info').find('h2').text();
                    const thumbnails = Object.entries($('.gallerythumb').find('img')).map(image => {
                        return image[1].attribs
                            ? image[1].attribs['data-src']
                            : null;
                    }).filter(link => link);
                    const images = Object.entries($('.gallerythumb').find('img')).map(image => {
                        return image[1].attribs
                            ? image[1].attribs['data-src'].replace(/t(\.(jpg|png|gif))/, '$1').replace('t.nhentai', 'i.nhentai')
                            : null;
                    }).filter(link => link);
                    const link = `https://nhentai.net/g/${id}/`;
                    resolve({ title, nativeTitle, details, pages: images, thumbnails, link });
                })
                .catch(reject);
        });
                }

export default router; 
