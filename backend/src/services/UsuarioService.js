const UsuarioRepository = require('../repositories/UsuarioRepository')

class UsuarioService {
    async listUsuarios() {
        const usuarios = await UsuarioRepository.listUsuarios()
        return {
            sucesso: true,
            dados: usuarios || [],
            total: usuarios ? usuarios.length : 0
        }
    }

    async getUsuarioById(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const usuario = await UsuarioRepository.findById(id)
        if (!usuario) {
            throw { status: 404, mensagem: 'Usuário não encontrado' }
        }

        return {
            sucesso: true,
            dados: usuario
        }
    }

    async registerUsuario(data) {
        const { nome, email, senha, cargo } = data

        if (!nome || !email || !senha) {
            throw { status: 400, mensagem: 'Campos obrigatórios: nome, email e senha' }
        }

        const existingEmail = await UsuarioRepository.findByEmail(email)
        if (existingEmail) {
            throw { status: 409, mensagem: 'Email já cadastrado' }
        }

        const insertId = await UsuarioRepository.registerUsuario({
            nome,
            email,
            senha, // Em produção, senha deve ser hashed com bcrypt
            cargo: cargo || 'Usuário'
        })

        const newUsuario = await UsuarioRepository.findById(insertId)

        return {
            sucesso: true,
            mensagem: 'Usuário cadastrado com sucesso',
            dados: newUsuario
        }
    }

    async updateUsuario(id, data) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await UsuarioRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Usuário não encontrado' }
        }

        if (data.email && data.email !== existing.email) {
            const emailCheck = await UsuarioRepository.findByEmail(data.email)
            if (emailCheck) {
                throw { status: 409, mensagem: 'Email já está em uso por outro usuário' }
            }
        }

        await UsuarioRepository.updateUsuario(id, data)
        const updated = await UsuarioRepository.findById(id)

        return {
            sucesso: true,
            mensagem: 'Usuário atualizado com sucesso',
            dados: updated
        }
    }

    async deleteUsuario(id) {
        if (!id || isNaN(id)) {
            throw { status: 400, mensagem: 'ID inválido' }
        }

        const existing = await UsuarioRepository.findById(id)
        if (!existing) {
            throw { status: 404, mensagem: 'Usuário não encontrado' }
        }

        await UsuarioRepository.deleteUsuario(id)

        return {
            sucesso: true,
            mensagem: 'Usuário excluído com sucesso'
        }
    }
}

module.exports = new UsuarioService()
