const express = require('express')
const router = express.Router()
const ImagemController = require('../controllers/ImagemController')

router.use((req, res, next) => {
    console.log(`Rota de imagens - ${req.method} ${req.path}`)
    next()
})

router.get('/', (req, res) => ImagemController.listarImagens(req, res))
router.get('/:id', (req, res) => ImagemController.getImagemById(req, res))
router.post('/', (req, res) => ImagemController.registerImagem(req, res))
router.put('/:id', (req, res) => ImagemController.updateImagem(req, res))
router.delete('/:id', (req, res) => ImagemController.deleteImagem(req, res))

module.exports = router
