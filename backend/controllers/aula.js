const adapter = require('../adaptadores/aula-adapter')

exports.getAula = (req, res, next) => {
    adapter.getAula(req.params.id).then(
        result => {
            var aula = result.rows
            res.status(200).json({
                aula
            })
        }
    ).catch(err => console.log(err))

}

exports.listAula = (req, res, next) => {
    adapter.listAula().then(
        result => {
            var aula = result.rows
            res.status(200).json({
                aula
            })
        }
    ).catch(err => console.log(err))
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
                idAula: result.id,
                idPerfil: req.params.idPerfil
            }
            adapter.marcarAula(marcacao)
        }
    ).catch(err => console.log(err))
    res.status(201).json({
        message: "Aula Criada"
    })
}

exports.marcarAula = (req, res, next) => {
    adapter.marcarAula(
        {
            idAula: req.body.idAula,
            idPerfil: req.body.idPerfil,
        })
    res.status(201).json({
        message: "Aula Marcada"
    })
}

exports.updateAula = (req, res, next) => {
    const aula = {
        materia: req.body.materia,
        dataAula: req.body.dataAula,
        professor: req.body.professor,
        id: req.body.idAula
    }
    adapter.updateAula(aula)
    res.status(201).json({
        message: "Aula Criada"
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
    ).catch(err => console.log(err))

}