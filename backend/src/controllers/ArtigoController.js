const ArtigoService = require('../services/ArtigoService')

class ArtigoController {
    async listarArtigo(req, res) {
        try {
            const result = await ArtigoService.listArticle()
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async listArticleById(req, res) {
        try {
            const result = await ArtigoService.listArticleById(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async listArticleBySlug(req, res) {
        try {
            const result = await ArtigoService.listArticleBySlug(req.params.slug)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async registerArticle(req, res) {
        try {
            const result = await ArtigoService.registerArticle(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async updateArticle(req, res) {
        try {
            const result = await ArtigoService.updateArticle(req.params.id, req.body)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async deleteArticle(req, res) {
        try {
            const result = await ArtigoService.deleteArticle(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }
}

module.exports = new ArtigoController()