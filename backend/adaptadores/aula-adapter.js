const aulaService = require('../services/aula-service')

exports.listAula = () => {
    return aulaService.listAula()
}

exports.getAula = (id) => {
    return aulaService.getAula(id)
}

exports.getAulaFilter = (filtros) => {
    return aulaService.getAulaFilter(filtros)
}

exports.updateAula = (aula) => {
    return aulaService.updateAula()
}


exports.createAula = (aula) => {
    aulaService.createAula(aula)
}