const UsuarioService = require('../services/UsuarioService')

class UsuarioController {
    async listarUsuarios(req, res) {
        try {
            const result = await UsuarioService.listUsuarios()
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async getUsuarioById(req, res) {
        try {
            const result = await UsuarioService.getUsuarioById(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async registerUsuario(req, res) {
        try {
            const result = await UsuarioService.registerUsuario(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async updateUsuario(req, res) {
        try {
            const result = await UsuarioService.updateUsuario(req.params.id, req.body)
            res.json(result)
        } catch (error) {
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: error.mensagem || 'Erro interno no servidor',
                erro: error.stack || error
            })
        }
    }

    async deleteUsuario(req, res) {
        try {
            const result = await UsuarioService.deleteUsuario(req.params.id)
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

module.exports = new UsuarioController()
