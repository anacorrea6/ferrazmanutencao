const express = require('express')
const router = express.Router()
const ProjetoController = require('../controllers/ProjetoController')

router.use((req, res, next) => {
    console.log(`Rota de projetos - ${req.method} ${req.path}`)
    next()
})

router.get('/', (req, res) => ProjetoController.listarProjetos(req, res))
router.get('/slug/:slug', (req, res) => ProjetoController.getProjetoBySlug(req, res))
router.get('/:id', (req, res) => ProjetoController.getProjetoById(req, res))
router.post('/', (req, res) => ProjetoController.registerProjeto(req, res))
router.put('/:id', (req, res) => ProjetoController.updateProjeto(req, res))
router.delete('/:id', (req, res) => ProjetoController.deleteProjeto(req, res))

module.exports = router
