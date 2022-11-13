const perfilService = require('../services/perfil-service')

exports.getPerfil = (id) => {
    return perfilService.getPerfil(id)
}

exports.getAulasMarcadas = (id) => {
    return perfilService.getAulasMarcadas(id)
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
    return perfilService.createAvaliacao(avaliacao)
}

exports.calculateAvaliacao = (avaliacoes, quantity) => {
    return perfilService.calculateAvaliacao(avaliacoes, quantity)
}