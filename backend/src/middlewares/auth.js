const jwt = require('jsonwebtoken')
const config = require('../config/environment')

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.status(401).json({
                sucesso: false,
                mensagem: 'Token não fornecido'
            })
        }

        const decoded = jwt.verify(token, config.jwt.secret)
        req.user = decoded
        next()
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                sucesso: false,
                mensagem: 'Token expirado'
            })
        }

        res.status(401).json({
            sucesso: false,
            mensagem: 'Token inválido'
        })
    }
}

module.exports = authMiddleware
