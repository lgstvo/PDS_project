const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'pds',
    password: '!Aa34275882'
})

module.exports = pool