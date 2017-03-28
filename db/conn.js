const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    database: 'awesome-tweets'
})

module.exports = db;
