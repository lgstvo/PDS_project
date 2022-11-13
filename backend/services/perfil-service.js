const perfilRepo = require('../repositories/perfil')

exports.getPerfil = (id) => {
    return perfilRepo.getPerfil()
}

exports.createPerfil = (perfilToCreate) => {
    return perfilRepo.createPerfil(perfilToCreate)
}

exports.updatePerfil = (perfilToUpdate) => {
    return perfilRepo.updatePerfil(perfilToUpdate)
}

exports.getAvaliacaoPerfil = (idPerfil) => {
    return perfilRepo.getAvaliacaoPerfil(idPerfil)
}

exports.createAvaliacao = (avaliacao) => {
    perfilRepo.createAvaliacao(avaliacao)
}