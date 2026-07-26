const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })

        if (error) {
            const messages = error.details.map(detail => ({
                field: detail.path.join('.'),
                mensagem: detail.message
            }))

            return res.status(400).json({
                sucesso: false,
                mensagem: 'Dados inválidos',
                erros: messages
            })
        }

        req.validatedBody = value
        next()
    }
}

module.exports = validate
