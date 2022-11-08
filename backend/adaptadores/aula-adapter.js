const aulaService = require('../services/aula-service')

exports.getAula = () => {
    return aulaService.getAula()
}

exports.createAula = (aula) => {
    aulaService.createAula(aula)
}