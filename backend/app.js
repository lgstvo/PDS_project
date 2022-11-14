const express = require('express')
const app = express()
const perfilRoutes = require('./routes/perfil')
const aulaRoutes = require('./routes/aula')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
            termsOfService: "http://example.com/terms/",
            contact: {
                name: "API Support",
                url: "http://www.exmaple.com/support",
                email: "support@example.com",
            },
        },

        servers: [
            {
                url: "http://localhost:3001",
                description: "My API Documentation",
            },
        ],
    },
    apis: ["./Routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((res, req, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With-Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET')
        return res.status(200).json({})
    }
    next();
})

app.use('/perfil', perfilRoutes)
app.use('/aula', aulaRoutes)

app.use((res, req, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app