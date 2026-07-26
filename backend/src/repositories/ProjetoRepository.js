const pool = require('../config/database')

class ProjetoRepository {
    async listProjetos(filtros = {}) {
        let query = `
            SELECT 
                p.*,
                s.titulo AS servico_titulo,
                s.slug AS servico_slug
            FROM projetos p
            LEFT JOIN servicos s ON p.servico_id = s.id
            WHERE 1=1
        `
        const params = []

        if (filtros.destaque !== undefined) {
            query += ' AND p.destaque_home = ?'
            params.push(filtros.destaque === 'true' || filtros.destaque === true || filtros.destaque === '1' ? 1 : 0)
        }

        if (filtros.servico_id) {
            query += ' AND p.servico_id = ?'
            params.push(filtros.servico_id)
        }

        query += ' ORDER BY p.criado_em DESC'

        const [rows] = await pool.query(query, params)
        return rows
    }

    async findById(id) {
        const query = `
            SELECT 
                p.*,
                s.titulo AS servico_titulo,
                s.slug AS servico_slug
            FROM projetos p
            LEFT JOIN servicos s ON p.servico_id = s.id
            WHERE p.id = ?
        `
        const [rows] = await pool.query(query, [id])
        return rows[0] || null
    }

    async findBySlug(slug) {
        const query = `
            SELECT 
                p.*,
                s.titulo AS servico_titulo,
                s.slug AS servico_slug
            FROM projetos p
            LEFT JOIN servicos s ON p.servico_id = s.id
            WHERE p.slug = ?
        `
        const [rows] = await pool.query(query, [slug])
        return rows[0] || null
    }

    async registerProjeto(dataProjeto) {
        const [result] = await pool.query('INSERT INTO projetos SET ?', [dataProjeto])
        return result.insertId
    }

    async updateProjeto(id, dataProjeto) {
        const fields = []
        const values = []

        for (const [key, value] of Object.entries(dataProjeto)) {
            fields.push(`${key} = ?`)
            values.push(value)
        }

        if (fields.length === 0) return 0

        values.push(id)

        const query = `UPDATE projetos SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await pool.query(query, values)
        return result.affectedRows
    }

    async deleteProjeto(id) {
        const [result] = await pool.query('DELETE FROM projetos WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}

module.exports = new ProjetoRepository()
