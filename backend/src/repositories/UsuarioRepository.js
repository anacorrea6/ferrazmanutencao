const pool = require('../config/database')

class UsuarioRepository {
    async listUsuarios() {
        const [rows] = await pool.query('SELECT id, nome, email, cargo, criado_em FROM usuarios ORDER BY criado_em DESC')
        return rows
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT id, nome, email, cargo, criado_em FROM usuarios WHERE id = ?', [id])
        return rows[0] || null
    }

    async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email])
        return rows[0] || null
    }

    async registerUsuario(dataUsuario) {
        const [result] = await pool.query('INSERT INTO usuarios SET ?', [dataUsuario])
        return result.insertId
    }

    async updateUsuario(id, dataUsuario) {
        const fields = []
        const values = []

        for (const [key, value] of Object.entries(dataUsuario)) {
            fields.push(`${key} = ?`)
            values.push(value)
        }

        if (fields.length === 0) return 0

        values.push(id)

        const query = `UPDATE usuarios SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await pool.query(query, values)
        return result.affectedRows
    }

    async deleteUsuario(id) {
        const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}

module.exports = new UsuarioRepository()
