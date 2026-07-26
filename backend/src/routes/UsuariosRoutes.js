const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')

router.use((req, res, next) => {
    console.log(`Rota de usuarios - ${req.method} ${req.path}`)
    next()
})

router.get('/', (req, res) => UsuarioController.listarUsuarios(req, res))
router.get('/:id', (req, res) => UsuarioController.getUsuarioById(req, res))
router.post('/', (req, res) => UsuarioController.registerUsuario(req, res))
router.put('/:id', (req, res) => UsuarioController.updateUsuario(req, res))
router.delete('/:id', (req, res) => UsuarioController.deleteUsuario(req, res))

module.exports = router
