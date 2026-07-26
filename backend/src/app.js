const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const path = require('path')

const app = express()
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const requestIdMiddleware = require('./middlewares/requestId')
const requestLogger = require('./middlewares/requestLogger')

// ============ SEGURANÇA ============

// Helmet - Headers de segurança HTTP (configurado para permitir imagens cross-origin)
app.use(helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' }
}))

// Compressão de resposta
app.use(compression())

// Rate limiting global
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // máximo 100 requisições por janela
    message: 'Muitas requisições, tente novamente mais tarde',
    standardHeaders: true,
    legacyHeaders: false
})
app.use(limiter)

// Request ID único
app.use(requestIdMiddleware)

// Logging de requisições
app.use(requestLogger)

// CORS com configuração segura
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id']
}
app.use(cors(corsOptions))

// ============ PARSERS ============
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// ============ STATIC FILES ============
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
app.use('/assets', express.static(path.join(__dirname, '../assets')))

// ============ ROTAS ============
app.use('/', routes)

// ============ ERROR HANDLING ============
// Middleware de erro SEMPRE por último
app.use(errorHandler)

module.exports = app