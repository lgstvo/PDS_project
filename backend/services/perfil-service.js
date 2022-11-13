const perfilRepo = require('../repositories/perfil')

exports.getPerfil = (id) => {
    return perfilRepo.getPerfil(id)
}

exports.getAulasMarcadas = (id) => {
    return perfilRepo.getAulasMarcadas(id)
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
   return perfilRepo.createAvaliacao(avaliacao)
}

exports.calculateAvaliacao = (avaliacoes, quantidade) => {
    var quantityClareza = 0
    var quantityPontualidade = 0
    var quantitySimplicidade = 0
    avaliacoes.forEach(element => {
        quantityClareza += element.notaclaridade;
        quantityPontualidade+= element.notapontualidade;
        quantitySimplicidade+= element.notasimplicidade;
    });

    return {
        notaClareza: quantidade != 0 ? quantityClareza/quantidade : 0,
        notaSimplicidade: quantidade != 0 ? quantitySimplicidade/quantidade : 0,
        notaPontualidade: quantidade != 0 ? quantityPontualidade/quantidade : 0
    }
}