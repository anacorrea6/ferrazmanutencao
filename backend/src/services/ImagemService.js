const ImagemRepository = require('../repositories/ImagemRepository')

class ImagemService {
    async listImagens(filtros) {
        const imagens = await ImagemRepository.listImagens(filtros)
        return {
            sucesso: true,
            dados: imagens || [],
            total: imagens ? imagens.length : 0
        }
    }

    async getImagemById(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const imagem = await ImagemRepository.findById(id)
        if (!imagem) {
            throw { status: 404, mensagem: 'Imagem não encontrada' }
        }

        return {
            sucesso: true,
            dados: imagem
        }
    }

    async registerImagem(data) {
        const { url } = data

        if (!url) {
            throw { status: 400, mensagem: 'O campo url é obrigatório' }
        }

        const insertId = await ImagemRepository.registerImagem(data)
        const newImagem = await ImagemRepository.findById(insertId)

        return {
            sucesso: true,
            mensagem: 'Imagem cadastrada com sucesso',
            dados: newImagem
        }
    }

    async updateImagem(id, data) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ImagemRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Imagem não encontrada' }
        }

        await ImagemRepository.updateImagem(id, data)
        const updated = await ImagemRepository.findById(id)

        return {
            sucesso: true,
            mensagem: 'Imagem atualizada com sucesso',
            dados: updated
        }
    }

    async deleteImagem(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ImagemRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Imagem não encontrada' }
        }

        await ImagemRepository.deleteImagem(id)

        return {
            sucesso: true,
            mensagem: 'Imagem excluída com sucesso'
        }
    }
}

module.exports = new ImagemService()
