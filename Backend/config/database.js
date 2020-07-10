module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        // host: env("DATABASE_HOST", "127.0.0.1"),
        // srv: env.bool("DATABASE_SRV", false),
        // port: env.int("DATABASE_PORT", 27017),
        // database: env("DATABASE_NAME", "Backend"),
        // username: env("DATABASE_USERNAME", ""),
        // password: env("DATABASE_PASSWORD", ""),
        uri: env("DATABASE_URI"),
        database: env("DATABASE_NAME"),
      },
      options: {
        // authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: true,
      },
    },
  },
});
