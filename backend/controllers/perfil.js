const adapter = require('../adaptadores/perfil-adapter')
const bcrypt = require('bcrypt')
const { Connection } = require('pg')

exports.getPerfil = (req, res, next) => {
    adapter.getPerfil(req.params.id).then(
        result => {
            var perfil = result.rows
            res.status(200).json({
                perfil
            })
        }
    ).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.getAulasMarcadas = (req, res, next) => {
    adapter.getAulasMarcadas(req.params.id).then(
        result => {
            var aulasMarcadas = result.rows
            res.status(200).json({
                aulasMarcadas
            })
        }
    ).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.getAvaliacaoPerfil = (req, res, next) => {
    adapter.getAvaliacaoPerfil(req.params.idPerfil).then(
        result => {
            var avaliacoes = result.rows
            var quantity = result.rowCount
            var avaliacoes = adapter.calculateAvaliacao(avaliacoes, quantity)
            res.status(200).json({
                avaliacoes
            })
        }
    ).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.createPerfil = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        } else {
            const perfil = {
                nome: req.body.nome,
                isProfessor: req.body.isProfessor,
                pwd: hash,
                email: req.body.email,
                telefone: req.body.telefone,
                curriculo: req.body.curriculo
            }
            adapter.createPerfil(perfil).then(
                result => {
                    res.status(201).json({
                        message: 'Perfil Criado'
                    })
                }
            ).catch(error => {
                console.log(error)
                res.status(500).json({
                    error: error
                })
            })
        }
    }
    )
}

exports.createAvaliacaoPerfil = (req, res, next) => {
    const avaliacao = {
        notaClareza: req.body.notaClareza,
        notaSimplicidade: req.body.notaSimplicidade,
        notaPontualidade: req.body.notaPontualidade,
        idPerfil: req.params.idPerfil
    }
    adapter.createAvaliacao(avaliacao).then(
        result => {
            res.status(201).json({
                message: 'Avaliacao Criada'
            })
        }
    ).catch(error => {
        console.log(error)
        res.status(500).json({
            error: error
        })
    })
}

exports.updatePerfil = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        } else {
            const perfil = {
                id : req.body.id,
                nome: req.body.nome,
                isProfessor: req.body.isProfessor,
                pwd: hash,
                email: req.body.email,
                telefone: req.body.telefone,
                curriculo: req.body.curriculo
            }
            adapter.updatePerfil(perfil).then(
                result => res.status(204).json({
                    message: "Perfil Atualizado"
                })
            ).catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })
            }
            )
        }
    }
    )
}