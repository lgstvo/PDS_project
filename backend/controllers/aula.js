const adapter = require('../adaptadores/aula-adapter')

exports.getAula = (req, res, next) => {
    adapter.getAula(req.params.id).then(
        result => {
            var aula = result.rows
            res.status(200).json({
                aula
            })
        }
    ).catch(err => res.status(500).json({
        error: err
    }))
}

exports.listAula = (req, res, next) => {
    adapter.listAula().then(
        result => {
            var aula = result.rows
            res.status(200).json({
                aula
            })
        }
    ).catch(err => res.status(500).json({
        error: err
    }))
}

exports.createAula = (req, res, next) => {
    const aula = {
        materia: req.body.materia,
        dataAula: req.body.dataAula,
        professor: req.body.professor
    }
    adapter.createAula(aula).then(
        result => {
            var marcacao = {
                idAula: result.rows[0].id,
                idPerfil: req.params.idPerfil
            }
            adapter.marcarAula(marcacao)
            res.status(201).json({
                message: "Aula Criada"
            })
        }
    ).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.marcarAula = (req, res, next) => {
    const marcacao = {
        idAula: req.body.idAula,
        idPerfil: req.body.idPerfil,
    }
    adapter.marcarAula(marcacao
        ).then(
            result =>
                res.status(201).json({
                    message: "Aula Marcada"
                })
        ).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        }
        )
}

exports.updateAula = (req, res, next) => {
    const aula = {
        materia: req.body.materia,
        dataAula: req.body.dataAula,
        professor: req.body.professor,
        id: req.body.idAula
    }
    adapter.updateAula(aula).then(() => {
        res.status(204).json({
            message: "Aula Atualizada"
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.getAulaFilter = (req, res, next) => {
    var aula = adapter.getAulaFilter({
        dataAula: req.body.dataAula,
        materia: req.body.materia,
        professor: req.body.professor
    }).then(
        result => {
            var aula = result.rows
            res.status(200).json({
                aula
            })
        }
    ).catch(err => res.status(500).json({
        error: err
    }))

}