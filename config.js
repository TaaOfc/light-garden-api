import { fileURLToPath } from 'url';
import { dirname } from 'path';
import moment from'moment-timezone';
import http from'node:http';

const api = {
"host": "api.ipify.org",
"port": 80,
"path": "/"
};

http.get(api, response => {
response.on("data", ip => {
global.ipy = `${ip}`
});
});
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

global.host = "https://light-garden-team.my.id"

global.creator = "okta and vicillia"

global.key = 'okta'

global.day = moment.tz('Asia/Jakarta').format('HH : mm : ss')

global.limit = {
    free: 15,
    prem: 1000
}

global.mess = {
    error: {
        creator,
        status: false,
        message: '[!] The server encountered an internal error and was unable to complete your request. Either the server is overloaded or there is an error in the application.'
    },
    need: {
        apikey: {
            creator,
            status: false,
            message: '[!] APIKEY Required'
        },
        url: {
            creator,
            status: false,
            message: '[!] URL Required'
        },
        q: {
            creator,
            status: false,
            message: '[!] QUERY REQUIRE'
        }
    }
}
