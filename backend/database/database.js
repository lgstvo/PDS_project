const { Pool } = require('pg')

const pool = new Pool({
    host:  process.env.BD_HOST,
    user:  process.env.BD_USER,
    database:  process.env.BD,
    password: process.env.BD_PWD
})

module.exports = pool