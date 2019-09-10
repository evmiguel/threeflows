const parse = require('url-parse');
const devConfig = require('../../../config/devDbConfig.json')
require('dotenv').config();

exports.getDbConfig = function() {
    if (process.env.DATABASE_URL) {
        const url = parse(process.env.DATABASE_URL, true);
        console.log(url)
        return
    }
    
    return devConfig;
}