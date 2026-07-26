const pool = require('../config/database')

class ServicoRepository {
    async listServicos() {
        const [rows] = await pool.query('SELECT * FROM servicos ORDER BY criado_em DESC')
        return rows
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM servicos WHERE id = ?', [id])
        return rows[0] || null
    }

    async findBySlug(slug) {
        const [rows] = await pool.query('SELECT * FROM servicos WHERE slug = ?', [slug])
        return rows[0] || null
    }

    async registerServico(dataServico) {
        const [result] = await pool.query('INSERT INTO servicos SET ?', [dataServico])
        return result.insertId
    }

    async updateServico(id, dataServico) {
        const fields = []
        const values = []

        for (const [key, value] of Object.entries(dataServico)) {
            fields.push(`${key} = ?`)
            values.push(value)
        }

        if (fields.length === 0) return 0

        values.push(id)

        const query = `UPDATE servicos SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await pool.query(query, values)
        return result.affectedRows
    }

    async deleteServico(id) {
        const [result] = await pool.query('DELETE FROM servicos WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}

module.exports = new ServicoRepository()
