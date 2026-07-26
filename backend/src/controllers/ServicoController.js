const ServicoService = require('../services/ServicoService')

class ServicoController {
    async listarServicos(req, res) {
        try {
            const result = await ServicoService.listServicos()
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getServicoById(req, res) {
        try {
            const result = await ServicoService.getServicoById(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getServicoBySlug(req, res) {
        try {
            const result = await ServicoService.getServicoBySlug(req.params.slug)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async registerServico(req, res) {
        try {
            const result = await ServicoService.registerServico(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async updateServico(req, res) {
        try {
            const result = await ServicoService.updateServico(req.params.id, req.body)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async deleteServico(req, res) {
        try {
            const result = await ServicoService.deleteServico(req.params.id)
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

module.exports = new ServicoController()
