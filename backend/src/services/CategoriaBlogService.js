const CategoriaBlogRepository = require('../repositories/CategoriaBlogRepository')

class CategoriaBlogService {
    async listCategorias() {
        const categorias = await CategoriaBlogRepository.listCategorias()
        return {
            sucesso: true,
            dados: categorias || [],
            total: categorias ? categorias.length : 0
        }
    }

    async getCategoriaById(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const categoria = await CategoriaBlogRepository.findById(id)
        if (!categoria) {
            throw { status: 404, mensagem: 'Categoria não encontrada' }
        }

        return {
            sucesso: true,
            dados: categoria
        }
    }

    async getCategoriaBySlug(slug) {
        if (!slug) {
            throw { status: 400, mensagem: 'Slug é obrigatório' }
        }

        const categoria = await CategoriaBlogRepository.findBySlug(slug)
        if (!categoria) {
            throw { status: 404, mensagem: 'Categoria não encontrada' }
        }

        return {
            sucesso: true,
            dados: categoria
        }
    }

    async registerCategoria(data) {
        const { nome, slug } = data

        if (!nome || !slug) {
            throw { status: 400, mensagem: 'Campos obrigatórios: nome e slug' }
        }

        const existingSlug = await CategoriaBlogRepository.findBySlug(slug)
        if (existingSlug) {
            throw { status: 409, mensagem: 'Já existe uma categoria cadastrada com este slug' }
        }

        const insertId = await CategoriaBlogRepository.registerCategoria(data)
        const newCategoria = await CategoriaBlogRepository.findById(insertId)

        return {
            sucesso: true,
            mensagem: 'Categoria criada com sucesso',
            dados: newCategoria
        }
    }

    async updateCategoria(id, data) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await CategoriaBlogRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Categoria não encontrada' }
        }

        if (data.slug && data.slug !== existing.slug) {
            const slugCheck = await CategoriaBlogRepository.findBySlug(data.slug)
            if (slugCheck) {
                throw { status: 409, mensagem: 'Já existe outra categoria com este slug' }
            }
        }

        await CategoriaBlogRepository.updateCategoria(id, data)
        const updated = await CategoriaBlogRepository.findById(id)

        return {
            sucesso: true,
            mensagem: 'Categoria atualizada com sucesso',
            dados: updated
        }
    }

    async deleteCategoria(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await CategoriaBlogRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Categoria não encontrada' }
        }

        await CategoriaBlogRepository.deleteCategoria(id)

        return {
            sucesso: true,
            mensagem: 'Categoria excluída com sucesso'
        }
    }
}

module.exports = new CategoriaBlogService()
