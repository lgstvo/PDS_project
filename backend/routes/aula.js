const express = require('express')
const router = express.Router()
const controller = require('../controllers/aula')

router.get('/' , controller.getAula)

router.post('/' , controller.createAula)

router.patch('/' , (req, res, next) => {
    res.status(204).json({
        message: 'Patch aulas'
    })
})

router.get('/:id', (req, res , next) => {
    res.status(200).json({
        message: 'Get aula'
    })
})

router.get('/:idAluno', (req, res , next) => {
    res.status(200).json({
        message: 'Get aulas do aluno'
    })
})

module.exports = router
