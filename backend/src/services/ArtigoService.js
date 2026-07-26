const ArtigoRepository = require('../repositories/ArtigoRepository')

class ArtigoService {

    async listArticle() {
        const articles = await ArtigoRepository.listArticle()

        return {
            sucesso: true,
            dados: articles || [],
            total: articles ? articles.length : 0
        }
    }

    async listArticleById(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const article = await ArtigoRepository.listArticleById(id)

        if (!article) {
            throw { status: 404, mensagem: 'Artigo não encontrado' }
        }

        return {
            sucesso: true,
            dados: article
        }
    }

    async listArticleBySlug(slug) {
        if (!slug) {
            throw { status: 400, mensagem: 'Slug é obrigatório' }
        }

        const article = await ArtigoRepository.listArticleBySlug(slug)

        if (!article) {
            throw { status: 404, mensagem: 'Artigo não encontrado' }
        }

        return {
            sucesso: true,
            dados: article
        }
    }

    async registerArticle(data) {
        const { usuario_id, titulo, slug, resumo, conteudo } = data

        if (!usuario_id || !titulo || !slug || !resumo || !conteudo) {
            throw { status: 400, mensagem: 'Campos obrigatórios: usuario_id, titulo, slug, resumo e conteudo' }
        }

        const existingSlug = await ArtigoRepository.listArticleBySlug(slug)
        if (existingSlug) {
            throw { status: 409, mensagem: 'Já existe um artigo com este slug' }
        }

        const insertId = await ArtigoRepository.registerArticle(data)
        const newArticle = await ArtigoRepository.listArticleById(insertId)

        return {
            sucesso: true,
            mensagem: 'Artigo criado com sucesso',
            dados: newArticle
        }
    }

    async updateArticle(id, data) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ArtigoRepository.listArticleById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Artigo não encontrado' }
        }

        if (data.slug && data.slug !== existing.slug) {
            const slugCheck = await ArtigoRepository.listArticleBySlug(data.slug)
            if (slugCheck) {
                throw { status: 409, mensagem: 'Já existe outro artigo com este slug' }
            }
        }

        await ArtigoRepository.updateArticle(id, data)
        const updated = await ArtigoRepository.listArticleById(id)

        return {
            sucesso: true,
            mensagem: 'Artigo atualizado com sucesso',
            dados: updated
        }
    }

    async deleteArticle(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ArtigoRepository.listArticleById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Artigo não encontrado' }
        }

        await ArtigoRepository.deleteArticle(id)

        return {
            sucesso: true,
            mensagem: 'Artigo excluído com sucesso'
        }
    }
}

module.exports = new ArtigoService()