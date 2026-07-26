const Joi = require('joi')

const artigoSchemas = {
    listArticleById: Joi.object({
        id: Joi.number().integer().positive().required().messages({
            'number.base': 'ID deve ser um número',
            'number.positive': 'ID deve ser maior que zero',
            'any.required': 'ID é obrigatório'
        })
    }),

    listArticleBySlug: Joi.object({
        slug: Joi.string().required().messages({
            'string.empty': 'Slug não pode estar vazio',
            'any.required': 'Slug é obrigatório'
        })
    }),

    createArticle: Joi.object({
        usuario_id: Joi.number().integer().positive().required(),
        categoria_id: Joi.number().integer().positive().allow(null),
        titulo: Joi.string().min(5).max(255).required(),
        slug: Joi.string().lowercase().pattern(/^[a-z0-9-]+$/).required(),
        resumo: Joi.string().min(10).max(500).required(),
        conteudo: Joi.string().min(20).required(),
        meta_description: Joi.string().max(160),
        meta_keywords: Joi.string().max(255),
        destaque: Joi.boolean().default(false),
        status: Joi.string().valid('rascunho', 'publicado', 'arquivado').default('rascunho')
    }).unknown(false),

    updateArticle: Joi.object({
        titulo: Joi.string().min(5).max(255),
        slug: Joi.string().lowercase().pattern(/^[a-z0-9-]+$/),
        resumo: Joi.string().min(10).max(500),
        conteudo: Joi.string().min(20),
        meta_description: Joi.string().max(160),
        meta_keywords: Joi.string().max(255),
        destaque: Joi.boolean(),
        status: Joi.string().valid('rascunho', 'publicado', 'arquivado')
    }).unknown(false).min(1)
}

module.exports = artigoSchemas
