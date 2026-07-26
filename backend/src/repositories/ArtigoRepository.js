const pool = require('../config/database')

class ArtigoRepository {
    async listArticle() {
        const query = `
            SELECT 
                a.*,
                u.nome AS usuario_nome,
                c.nome AS categoria_nome,
                c.slug AS categoria_slug
            FROM artigos a
            LEFT JOIN usuarios u ON a.usuario_id = u.id
            LEFT JOIN categorias_blog c ON a.categoria_id = c.id
            ORDER BY a.criado_em DESC
        `
        const [rows] = await pool.query(query)
        return rows
    }

    async listArticleById(id) {
        const query = `
            SELECT 
                a.*,
                u.nome AS usuario_nome,
                c.nome AS categoria_nome,
                c.slug AS categoria_slug
            FROM artigos a
            LEFT JOIN usuarios u ON a.usuario_id = u.id
            LEFT JOIN categorias_blog c ON a.categoria_id = c.id
            WHERE a.id = ?
        `
        const [rows] = await pool.query(query, [id])
        return rows[0] || null
    }

    async listArticleBySlug(slug) {
        const query = `
            SELECT 
                a.*,
                u.nome AS usuario_nome,
                c.nome AS categoria_nome,
                c.slug AS categoria_slug
            FROM artigos a
            LEFT JOIN usuarios u ON a.usuario_id = u.id
            LEFT JOIN categorias_blog c ON a.categoria_id = c.id
            WHERE a.slug = ?
        `
        const [rows] = await pool.query(query, [slug])
        return rows[0] || null
    }

    async findById(id) {
        return this.listArticleById(id)
    }

    async registerArticle(dataArticle) {
        const [resultRegister] = await pool.query('INSERT INTO artigos SET ?', [dataArticle])
        return resultRegister.insertId
    }

    async updateArticle(id, dataArticle) {
        const articleFields = []
        const articleValues = []

        for (const [key, value] of Object.entries(dataArticle)) {
            articleFields.push(`${key} = ?`)
            articleValues.push(value)
        }

        if (articleFields.length === 0) return 0

        articleValues.push(id)

        const query = `UPDATE artigos SET ${articleFields.join(', ')} WHERE id = ?`
        const [result] = await pool.query(query, articleValues)
        return result.affectedRows
    }

    async deleteArticle(id) {
        const [result] = await pool.query('DELETE FROM artigos WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}

module.exports = new ArtigoRepository()