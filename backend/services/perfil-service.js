const perfilRepo = require('../repositories/perfil')
const bcrypt = require('bcrypt')
const jwttoken = require('jsonwebtoken')

exports.login = (email) => {
    return perfilRepo.login(email)
}

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

exports.getToken = (user, pwd, res) => {
    bcrypt.compare(pwd, user.pwd, (err, result) => {
        if (err) {
            return res.status(401).json({
                message: 'Autenticacao Falhou'
            })
        }

        if (result) {
            const token = jwttoken.sign({
                userId: user.id,
                userEmail: user.email
            },process.env.JWT_TOKEN, {
                expiresIn: '1h'
            })
            return res.status(200).json({
                message: 'Autenticacao Sucesso',
                token: token
            })
        }
        return res.status(401).json({
            message: 'Autenticacao Falhou'
        })
    })
}

exports.calculateAvaliacao = (avaliacoes, quantidade) => {
    var quantityClareza = 0
    var quantityPontualidade = 0
    var quantitySimplicidade = 0
    avaliacoes.forEach(element => {
        quantityClareza += element.notaclaridade;
        quantityPontualidade += element.notapontualidade;
        quantitySimplicidade += element.notasimplicidade;
    });

    return {
        notaClareza: quantidade != 0 ? quantityClareza / quantidade : 0,
        notaSimplicidade: quantidade != 0 ? quantitySimplicidade / quantidade : 0,
        notaPontualidade: quantidade != 0 ? quantityPontualidade / quantidade : 0
    }
}