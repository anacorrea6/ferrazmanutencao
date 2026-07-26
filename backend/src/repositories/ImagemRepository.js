const pool = require('../config/database')

class ImagemRepository {
    async listImagens(filtros = {}) {
        let query = 'SELECT * FROM imagens WHERE 1=1'
        const params = []

        if (filtros.servico_id) {
            query += ' AND servico_id = ?'
            params.push(filtros.servico_id)
        }

        if (filtros.projeto_id) {
            query += ' AND projeto_id = ?'
            params.push(filtros.projeto_id)
        }

        if (filtros.artigo_id) {
            query += ' AND artigo_id = ?'
            params.push(filtros.artigo_id)
        }

        query += ' ORDER BY ordem ASC, criado_em DESC'

        const [rows] = await pool.query(query, params)
        return rows
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM imagens WHERE id = ?', [id])
        return rows[0] || null
    }

    async registerImagem(dataImagem) {
        const [result] = await pool.query('INSERT INTO imagens SET ?', [dataImagem])
        return result.insertId
    }

    async updateImagem(id, dataImagem) {
        const fields = []
        const values = []

        for (const [key, value] of Object.entries(dataImagem)) {
            fields.push(`${key} = ?`)
            values.push(value)
        }

        if (fields.length === 0) return 0

        values.push(id)

        const query = `UPDATE imagens SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await pool.query(query, values)
        return result.affectedRows
    }

    async deleteImagem(id) {
        const [result] = await pool.query('DELETE FROM imagens WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}

module.exports = new ImagemRepository()
