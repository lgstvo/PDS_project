const express = require('express')
const router = express.Router()
const controller = require('../controllers/aula')

router.get('/' , controller.listAula)

router.get('/filtros',  controller.getAulaFilter)

router.post('/' , controller.createAula)

router.patch('/:idAula' , controller.updateAula)

router.get('/:id',  controller.getAula)


router.get('/:idAluno', controller.getAula)

module.exports = router
