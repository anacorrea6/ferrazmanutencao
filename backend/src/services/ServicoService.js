const ServicoRepository = require('../repositories/ServicoRepository')

class ServicoService {
    async listServicos() {
        const servicos = await ServicoRepository.listServicos()
        return {
            sucesso: true,
            dados: servicos || [],
            total: servicos ? servicos.length : 0
        }
    }

    async getServicoById(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const servico = await ServicoRepository.findById(id)
        if (!servico) {
            throw { status: 404, mensagem: 'Serviço não encontrado' }
        }

        return {
            sucesso: true,
            dados: servico
        }
    }

    async getServicoBySlug(slug) {
        if (!slug) {
            throw { status: 400, mensagem: 'Slug é obrigatório' }
        }

        const servico = await ServicoRepository.findBySlug(slug)
        if (!servico) {
            throw { status: 404, mensagem: 'Serviço não encontrado' }
        }

        return {
            sucesso: true,
            dados: servico
        }
    }

    async registerServico(data) {
        const { titulo, slug, resumo, descricao_completa } = data

        if (!titulo || !slug || !resumo || !descricao_completa) {
            throw { status: 400, mensagem: 'Campos obrigatórios: titulo, slug, resumo e descricao_completa' }
        }

        const existingSlug = await ServicoRepository.findBySlug(slug)
        if (existingSlug) {
            throw { status: 409, mensagem: 'Já existe um serviço cadastrado com este slug' }
        }

        const insertId = await ServicoRepository.registerServico(data)
        const newServico = await ServicoRepository.findById(insertId)

        return {
            sucesso: true,
            mensagem: 'Serviço cadastrado com sucesso',
            dados: newServico
        }
    }

    async updateServico(id, data) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ServicoRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Serviço não encontrado' }
        }

        if (data.slug && data.slug !== existing.slug) {
            const slugCheck = await ServicoRepository.findBySlug(data.slug)
            if (slugCheck) {
                throw { status: 409, mensagem: 'Já existe outro serviço cadastrado com este slug' }
            }
        }

        await ServicoRepository.updateServico(id, data)
        const updated = await ServicoRepository.findById(id)

        return {
            sucesso: true,
            mensagem: 'Serviço atualizado com sucesso',
            dados: updated
        }
    }

    async deleteServico(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await ServicoRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Serviço não encontrado' }
        }

        await ServicoRepository.deleteServico(id)

        return {
            sucesso: true,
            mensagem: 'Serviço excluído com sucesso'
        }
    }
}

module.exports = new ServicoService()
