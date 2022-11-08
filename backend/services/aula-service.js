const aulaRepo = require('../repositories/aula')

exports.getAula = () => {
    return aulaRepo.getAula()
}

exports.createAula = (aula) => {
    return aulaRepo.createAula(aula)
}