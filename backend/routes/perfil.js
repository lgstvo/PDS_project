const express = require('express')
const router = express.Router()
const controller = require('../controllers/perfil')


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
 *     Avaliacao:
 *       type: object
 *       properties:
 *          notaClareza:
 *            type: integer
 *          notaPontualidade:
 *            type: integer
 *          notaSimplicidade:
 *            type: integer
 */


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
router.get('/:id', controller.getPerfil)

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
 *            $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 */
router.post('/', controller.createPerfil)

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
 *            $ref: '#/components/schemas/Post'
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
router.patch('/', controller.updatePerfil)

/**
 * @swagger
 * /perfil:
 *   get:
 *     tags: [Perfil]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avaliacao'
 */

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
router.get('/avaliacao/:idPerfil', controller.getAvaliacaoPerfil)

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
router.post('/avaliacao/:idPerfil', controller.createAvaliacaoPerfil)

module.exports = router
