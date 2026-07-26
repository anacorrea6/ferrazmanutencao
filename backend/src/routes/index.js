const express = require('express')
const router = express.Router()

const UsuariosRoutes = require('./UsuariosRoutes')
const ServicosRoutes = require('./ServicosRoutes')
const CategoriasBlogRoutes = require('./CategoriasBlogRoutes')
const ProjetosRoutes = require('./ProjetosRoutes')
const ArtigosRoutes = require('./ArtigosRoutes')
const ImagensRoutes = require('./ImagensRoutes')

router.get('/', (req, res) => {
    res.json({
        mensagem: 'API Ferraz Manutenção funcionando!!',
        versao: '1.0.0',
        arquitetura: 'MVC + SOLID (Refatorada)',
        recursos: [
            '/usuarios',
            '/servicos',
            '/categorias-blog',
            '/projetos',
            '/artigos',
            '/imagens'
        ]
    })
})

router.use('/usuarios', UsuariosRoutes)
router.use('/servicos', ServicosRoutes)
router.use('/categorias-blog', CategoriasBlogRoutes)
router.use('/categorias', CategoriasBlogRoutes)
router.use('/projetos', ProjetosRoutes)
router.use('/artigos', ArtigosRoutes)
router.use('/articles', ArtigosRoutes)
router.use('/imagens', ImagensRoutes)

module.exports = router