const express = require('express')
const router = express.Router()

router.post('/' , (req, res ,next) => {
    res.status(201).json({
        message: 'Post Perfils'
    })
})

router.patch('/' , (req, res, next) => {
    res.status(204).json({
        message: 'Patch Perfils'
    })
})

router.get('/:id', (req, res , next) => {
    res.status(200).json({
        message: 'Get perfil'
    })
})

module.exports = router
