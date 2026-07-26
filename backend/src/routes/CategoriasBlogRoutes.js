const express = require('express')
const router = express.Router()
const CategoriaBlogController = require('../controllers/CategoriaBlogController')

router.use((req, res, next) => {
    console.log(`Rota de categorias-blog - ${req.method} ${req.path}`)
    next()
})

router.get('/', (req, res) => CategoriaBlogController.listarCategorias(req, res))
router.get('/slug/:slug', (req, res) => CategoriaBlogController.getCategoriaBySlug(req, res))
router.get('/:id', (req, res) => CategoriaBlogController.getCategoriaById(req, res))
router.post('/', (req, res) => CategoriaBlogController.registerCategoria(req, res))
router.put('/:id', (req, res) => CategoriaBlogController.updateCategoria(req, res))
router.delete('/:id', (req, res) => CategoriaBlogController.deleteCategoria(req, res))

module.exports = router
