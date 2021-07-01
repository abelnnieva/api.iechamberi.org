module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          ca:
            process.env.NODE_ENV === 'production'
              ? process.env.CA_CERT
              : fs.readFileSync(`${__dirname}/ca-certificate.crt`).toString(),
        },
      },
      options: {}
    },
  },
});
