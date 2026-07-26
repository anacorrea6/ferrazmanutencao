const express = require('express')
const router = express.Router()
const ServicoController = require('../controllers/ServicoController')

router.use((req, res, next) => {
    console.log(`Rota de servicos - ${req.method} ${req.path}`)
    next()
})

router.get('/', (req, res) => ServicoController.listarServicos(req, res))
router.get('/slug/:slug', (req, res) => ServicoController.getServicoBySlug(req, res))
router.get('/:id', (req, res) => ServicoController.getServicoById(req, res))
router.post('/', (req, res) => ServicoController.registerServico(req, res))
router.put('/:id', (req, res) => ServicoController.updateServico(req, res))
router.delete('/:id', (req, res) => ServicoController.deleteServico(req, res))

module.exports = router
