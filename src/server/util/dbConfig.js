require('dotenv').config();

exports.getDbConfig = function() {
    if (process.env.DATABASE_URL) {
        return {
            url: process.env.DATABASE_URL
        }
    }
    
    return {}
}