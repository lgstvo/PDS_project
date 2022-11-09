const express = require('express')
const router = express.Router()
const controller = require('../controllers/aula')

router.get('/' , controller.listAula)

router.get('/filtros',  controller.getAulaFilter)

router.post('/' , controller.createAula)

router.patch('/:idAula' , (req, res, next) => {
    res.status(204).json({
        message: 'Patch aulas'
    })
})

router.get('/:id',  controller.getAula)


router.get('/:idAluno', (req, res , next) => {
    res.status(200).json({
        message: 'Get aulas do aluno'
    })
})

module.exports = router
