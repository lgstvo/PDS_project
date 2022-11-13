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
    return aulaService.updateAula(aula)
}

exports.createAula = (aula) => {
    return aulaService.createAula(aula)
}

exports.marcarAula = (marcacao) => {
    return aulaService.marcarAula(marcacao)
}