const pool = require('../config/database')

class CategoriaBlogRepository {
    async listCategorias() {
        const [rows] = await pool.query('SELECT * FROM categorias_blog ORDER BY nome ASC')
        return rows
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM categorias_blog WHERE id = ?', [id])
        return rows[0] || null
    }

    async findBySlug(slug) {
        const [rows] = await pool.query('SELECT * FROM categorias_blog WHERE slug = ?', [slug])
        return rows[0] || null
    }

    async registerCategoria(dataCategoria) {
        const [result] = await pool.query('INSERT INTO categorias_blog SET ?', [dataCategoria])
        return result.insertId
    }

    async updateCategoria(id, dataCategoria) {
        const fields = []
        const values = []

        for (const [key, value] of Object.entries(dataCategoria)) {
            fields.push(`${key} = ?`)
            values.push(value)
        }

        if (fields.length === 0) return 0

        values.push(id)

        const query = `UPDATE categorias_blog SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await pool.query(query, values)
        return result.affectedRows
    }

    async deleteCategoria(id) {
        const [result] = await pool.query('DELETE FROM categorias_blog WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}

module.exports = new CategoriaBlogRepository()
