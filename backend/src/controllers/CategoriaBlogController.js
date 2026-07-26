const CategoriaBlogService = require('../services/CategoriaBlogService')

class CategoriaBlogController {
    async listarCategorias(req, res) {
        try {
            const result = await CategoriaBlogService.listCategorias()
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getCategoriaById(req, res) {
        try {
            const result = await CategoriaBlogService.getCategoriaById(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getCategoriaBySlug(req, res) {
        try {
            const result = await CategoriaBlogService.getCategoriaBySlug(req.params.slug)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async registerCategoria(req, res) {
        try {
            const result = await CategoriaBlogService.registerCategoria(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async updateCategoria(req, res) {
        try {
            const result = await CategoriaBlogService.updateCategoria(req.params.id, req.body)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async deleteCategoria(req, res) {
        try {
            const result = await CategoriaBlogService.deleteCategoria(req.params.id)
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

module.exports = new CategoriaBlogController()
