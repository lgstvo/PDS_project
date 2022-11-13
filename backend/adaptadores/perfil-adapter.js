const perfilService = require('../services/perfil-service')

exports.login = (email) => {
    return perfilService.login(email)
}

exports.getToken = (user, pwd, res) => {
    return perfilService.getToken(user, pwd, res)
}

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