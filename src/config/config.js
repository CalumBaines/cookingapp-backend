module.exports = {
    port: 8082,
    db: {
        database: process.env.DB_NAME || 'cookingapp',
        user: process.env.DB_USER || 'cookingapp',
        password: process.env.DB_PASS || 'cookingapp',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.host || 'localhost',
            storage: './cookingapp.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}