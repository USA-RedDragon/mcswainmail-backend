module.exports = {
    db: {
        host: process.env.DB_HOST || 'mail.invictrix.dev',
        username: process.env.DB_USERNAME || 'n8Y5QrQJyTrn5ShR',
        password: process.env.DB_PASSWORD || '_^r?eA3JPgaVk2@pujcnXGC*gtsZj',
        database: process.env.DB_DATABASE || 'servermail',
        dialect: process.env.DB_DIALECT || 'mariadb',
    },
    http: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:' + (process.env.PORT || 3000),
    },
    frontendHost: process.env.FRONTEND_HOST || 'http://localhost:8081',
    signingSecret: process.env.SECRET || 'secret',
};
