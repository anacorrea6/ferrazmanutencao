require('dotenv').config()

const config = {
    // Server
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    logLevel: process.env.LOG_LEVEL || 'info',

    // Database
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'manutencao_industrial',
        port: process.env.DB_PORT || 3306
    },

    // CORS
    cors: {
        allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:5173').split(',')
    },

    // JWT
    jwt: {
        secret: process.env.JWT_SECRET || 'seu_secret_muito_inseguro_mude_em_producao',
        expiry: process.env.JWT_EXPIRY || '7d'
    },

    // Upload
    upload: {
        maxSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880, // 5MB
        dir: process.env.UPLOAD_DIR || './uploads'
    },

    // API
    isDevelopment: process.env.NODE_ENV !== 'production',
    isProduction: process.env.NODE_ENV === 'production'
}

module.exports = config
