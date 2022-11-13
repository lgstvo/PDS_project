const express = require('express')
const router = express.Router()
const controller = require('../controllers/perfil')
const checkAuth = require('../adaptadores/autenticacao-adapter')

/**
 * @swagger
 *  tags:
 *    name: Perfil
 *    description: perfils of users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Perfil:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         nome:
 *           type: string
 *           description: nome do perfil
 *         isProfessor:
 *           type: boolean
 *           description: is professor
 *         pwd:
 *           type: string
 *           descripton: pwd
 *         email:
 *           type: string
 *           descripton: pwd
 *         telefone:
 *           type: string
 *           descripton: pwd
 *         curriculo:
 *           type: array
 *           items:
 *              type: string
 *     PerfilUpdate:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The Auto-generated id of a post
 *        nome:
 *          type: string
 *          description: nome do perfil
 *        isProfessor:
 *          type: boolean
 *          description: is professor
 *        email:
 *          type: string
 *          descripton: pwd
 *        telefone:
 *          type: string
 *          descripton: pwd
 *        curriculo:
 *          type: array
 *          items:
 *             type: string
 *     Avaliacao:
 *       type: object
 *       properties:
 *          notaClareza:
 *            type: integer
 *          notaPontualidade:
 *            type: integer
 *          notaSimplicidade:
 *            type: integer
 *     Login:
 *       type: object
 *       properties:
 *          email:
 *            type: string
 *          pwd:
 *            type: string
 */

/**
 * @swagger
 * /perfil/login:
 *   get:
 *     summary: Login
 *     tags: [Perfil]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: the list of the posts
 */
 router.get('/login', controller.login)

/**
 * @swagger
 * /perfil/:id:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Perfil]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 */
router.get('/:id', checkAuth, controller.getPerfil)

/**
 * @swagger
 * /perfil/aulas-marcadas/:id:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Perfil]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 */
 router.get('/aulas-marcadas/:id', checkAuth, controller.getAulasMarcadas)

/**
 * @swagger
 * /perfil:
 *   post:
 *     tags: [Perfil]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Perfil'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 */
router.post('/', checkAuth, controller.createPerfil)

/**
 * @swagger
 * /perfil:
 *   patch:
 *     tags: [Perfil]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PerfilUpdate'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 */
router.patch('/', checkAuth, controller.updatePerfil)

/**
 * @swagger
 * /perfil/avaliacao/:idPerfil:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Perfil]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 */
router.get('/avaliacao/:idPerfil', checkAuth, controller.getAvaliacaoPerfil)

/**
 * @swagger
 * /perfil/avaliacao/:idPerfil:
 *   get:
 *     summary: Returns all perfils
 *     tags: [Perfil]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 */
router.post('/avaliacao/:idPerfil', checkAuth, controller.createAvaliacaoPerfil)

module.exports = router
