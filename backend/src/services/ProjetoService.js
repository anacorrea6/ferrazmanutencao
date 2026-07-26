const ProjetoRepository = require('../repositories/ProjetoRepository')

class ProjetoService {
    async listProjetos(filtros) {
        const projetos = await ProjetoRepository.listProjetos(filtros)
        return {
            sucesso: true,
            dados: projetos || [],
            total: projetos ? projetos.length : 0
        }
    }

    async getProjetoById(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const projeto = await ProjetoRepository.findById(id)
        if (!projeto) {
            throw { status: 404, mensagem: 'Projeto não encontrado' }
        }

        return {
            sucesso: true,
            dados: projeto
        }
    }

    async getProjetoBySlug(slug) {
        if (!slug) {
            throw { status: 400, mensagem: 'Slug é obrigatório' }
        }

        const projeto = await ProjetoRepository.findBySlug(slug)
        if (!projeto) {
            throw { status: 404, mensagem: 'Projeto não encontrado' }
        }

        return {
            sucesso: true,
            dados: projeto
        }
    }

    async registerProjeto(data) {
        const { titulo, slug, resumo, descricao_detalhada } = data

        if (!titulo || !slug || !resumo || !descricao_detalhada) {
            throw { status: 400, mensagem: 'Campos obrigatórios: titulo, slug, resumo e descricao_detalhada' }
        }

        const existingSlug = await ProjetoRepository.findBySlug(slug)
        if (existingSlug) {
            throw { status: 409, mensagem: 'Já existe um projeto com este slug' }
        }

        const insertId = await ProjetoRepository.registerProjeto(data)
        const newProjeto = await ProjetoRepository.findById(insertId)

        return {
            sucesso: true,
            mensagem: 'Projeto cadastrado com sucesso',
            dados: newProjeto
        }
    }

    async updateProjeto(id, data) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ProjetoRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Projeto não encontrado' }
        }

        if (data.slug && data.slug !== existing.slug) {
            const slugCheck = await ProjetoRepository.findBySlug(data.slug)
            if (slugCheck) {
                throw { status: 409, mensagem: 'Já existe outro projeto com este slug' }
            }
        }

        await ProjetoRepository.updateProjeto(id, data)
        const updated = await ProjetoRepository.findById(id)

        return {
            sucesso: true,
            mensagem: 'Projeto atualizado com sucesso',
            dados: updated
        }
    }

    async deleteProjeto(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ProjetoRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Projeto não encontrado' }
        }

        await ProjetoRepository.deleteProjeto(id)

        return {
            sucesso: true,
            mensagem: 'Projeto excluído com sucesso'
        }
    }
}

module.exports = new ProjetoService()
