const postgres = require('postgres')

const sql = postgres({
    host: 'localhost',
    user: 'postgres',
    database: 'pds',
    password: '!Aa34275882'
})

module.exports = sql