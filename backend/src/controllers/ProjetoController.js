const ProjetoService = require('../services/ProjetoService')

class ProjetoController {
    async listarProjetos(req, res) {
        try {
            const result = await ProjetoService.listProjetos(req.query)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getProjetoById(req, res) {
        try {
            const result = await ProjetoService.getProjetoById(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getProjetoBySlug(req, res) {
        try {
            const result = await ProjetoService.getProjetoBySlug(req.params.slug)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async registerProjeto(req, res) {
        try {
            const result = await ProjetoService.registerProjeto(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async updateProjeto(req, res) {
        try {
            const result = await ProjetoService.updateProjeto(req.params.id, req.body)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async deleteProjeto(req, res) {
        try {
            const result = await ProjetoService.deleteProjeto(req.params.id)
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

module.exports = new ProjetoController()
