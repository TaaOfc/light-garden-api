const apikeyList = ['okta', 'vicilia'];//input key disini

const cekApikey = async (req, res, next) => {
    const apikey = req.query.apikey;

    if (!apikey) return res.json({ creator, status: false, message: 'apikey parameter cannot be empty.' });

    if (!apikeyList.includes(apikey)) return res.json({ creator, status: false, message: `apikey ${apikey} not found.` });

    next();
}


const isApikeyValid = (apikey) => {
    for (const email in db.data.users) {
        if (db.data.users[email].apikey === apikey) {
            return true;
        }
    }
    return false;
};

const limitApikey = async (req, res, next) => {
    const apikey = req.query.apikey;
    const b = await isApikeyValid(apikey)

    if (!apikey) return res.json({ creator, status: false, message: 'apikey parameter cannot be empty'});
    if (!b) return res.json({ creator, status: false, message: `apikey ${apikey} not found`});

    next();
}

export {
    cekApikey,
    limitApikey
}
