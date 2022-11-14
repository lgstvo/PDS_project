const aulaRepo = require('../repositories/aula')

exports.listAula = () => {
    return aulaRepo.listAula()
}

exports.getAula = (id) => {
    return aulaRepo.getAula(id)
}

exports.getAulaFilter = (filtros) => {
    return aulaRepo.getAulaFilter(filtros)
}

exports.createAula = (aula) => {
    return aulaRepo.createAula(aula)
}

exports.updateAula = (aula) => {
    return aulaRepo.updateAula(aula)
}

exports.marcarAula = (marcacao) => {
    return aulaRepo.marcarAula(marcacao)
}