const express = require('express')
const router = express.Router()
const controller = require('../controllers/aula')
const checkAuth = require('../adaptadores/autenticacao-adapter')

/**
 * @swagger
 *  tags:
 *    name: Aula
 *    description: aulas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Aula:
 *       type: object
 *       properties:
 *        id:
 *         type: integer
 *         description: The Auto-generated id of a post
 *        dataAula:
 *          type: string
 *          description: nome do perfil
 *        professor:
 *         type: string
 *         description: professor
 *        materia:
 *         type: string
 *         descripton: materia
 *     Marcacao:
 *      type: object
 *      properties:
 *          idPerfil:
 *              type: integer
 *          idAula:
 *              type: integer
 *     Filtros:
 *       type: object
 *       properties:
 *          dataAula:
 *              type: string
 *          professor:
 *              type: string
 *          materia: 
 *              type: string
 */

/**
 * @swagger
 * /aula/:id:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Aula]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aula'
 */
router.get('/', controller.listAula)

/**
 * @swagger
 * /aula/filtros:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Aula]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Filtros'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aula'
 */
router.get('/filtros', controller.getAulaFilter)

/**
 * @swagger
 * /aula/marcacao:
 *   post:
 *     summary: Returns all perfils
 *     tags: [Aula]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Marcacao'
 *     responses:
 *       201:
 *         description: the list of the posts'
 */
 router.post('/marcar', checkAuth, controller.marcarAula)

/**
 * @swagger
 * /aula/:idAula:
 *   post:
 *     summary: Returns all perfils
 *     tags: [Aula]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Aula'
 *     responses:
 *       201:
 *         description: the list of the posts
 */
router.post('/:idPerfil', checkAuth,controller.createAula)

/**
 * @swagger
 * /aula/:idAula:
 *   post:
 *     summary: Returns all perfils
 *     tags: [Aula]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Aula'
 *     responses:
 *       204:
 *         description: the list of the posts
 */
router.patch('/:idAula', checkAuth, controller.updateAula)

/**
 * @swagger
 * /aula/:idAula:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Aula]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Filtros'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aula'
 */
router.get('/:id', controller.getAula)

/**
 * @swagger
 * /aula/:idAluno:
 *   get:
 *     summary: Returns all aulas Marcadas
 *     tags: [Aula]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Filtros'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aula'
 */
router.get('/:idAluno', checkAuth ,controller.getAula)

module.exports = router
