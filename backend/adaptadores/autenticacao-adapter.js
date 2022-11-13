const autenticacao = require('../services/autenticacao-service')

module.exports = (req, res, next) => {
    autenticacao.autenticar(req, res, next)
}