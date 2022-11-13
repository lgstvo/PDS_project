const perfilService = require('../services/perfil-service')

exports.getPerfil = (id) => {
    return perfilService.getPerfil()
}

exports.createPerfil = (perfilToCreate) => {
    return perfilService.createPerfil(perfilToCreate)
}

exports.updatePerfil = (perfilToUpdate) => {
    return perfilService.updatePerfil(perfilToUpdate)
}

exports.getAvaliacaoPerfil = (idPerfil) => {
    return perfilService.getAvaliacaoPerfil(idPerfil)
}

exports.createAvaliacao = (avaliacao) => {
    perfilService.createAvaliacao(avaliacao)
}