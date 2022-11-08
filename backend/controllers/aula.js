const adapter = require('../adaptadores/aula-adapter')

exports.getAula = (req, res, next) => {
    var aula = adapter.getAula().then(
        ([rows, fieldData]) =>{
            res.status(200).json({
                aula:rows
            })
        }).catch(
            err => console.log(err))
    
}

exports.createAula = (req, res, next) => {
    const aula = {
        materia: req.body.materia,
        dataAula:req.body.dataAula,
        professor:req.body.professor
    }
    adapter.createAula(aula)
    res.status(201).json({
        message: "Aula Criada"
    })
}