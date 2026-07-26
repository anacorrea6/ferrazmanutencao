const express = require('express')
const router = express.Router()
const ArtigoController = require('../controllers/ArtigoController')

router.use((req, res, next) => {
    console.log(`Rota de artigos - ${req.method} ${req.path}`)
    next()
})

router.get('/', (req, res) => ArtigoController.listarArtigo(req, res))
router.get('/slug/:slug', (req, res) => ArtigoController.listArticleBySlug(req, res))
router.get('/:id', (req, res) => ArtigoController.listArticleById(req, res))
router.post('/', (req, res) => ArtigoController.registerArticle(req, res))
router.put('/:id', (req, res) => ArtigoController.updateArticle(req, res))
router.delete('/:id', (req, res) => ArtigoController.deleteArticle(req, res))

module.exports = router