const adapter = require('../adaptadores/perfil-adapter')

exports.getPerfil = (req, res, next) => {
    res.status(200).json({
        message: 'Get perfil'
    })
}

exports.getAvaliacaoPerfil = (req, res, next) => {
    res.status(200).json({
        message: 'Get avaliacoes do perfil'
    })
}

exports.createPerfil = (req, res, next) => {
    res.status(201).json({
        message: 'Post Perfils'
    })
}

exports.createAvaliacaoPerfil = (req, res, next) => {
    res.status(201).json({
        message: 'Post Perfils'
    })
}

exports.updatePerfil = (req, res, next) => {
    res.status(204).json({
        message: 'Patch Perfils'
    })
}