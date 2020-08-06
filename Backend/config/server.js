module.exports = ({ env }) => ({
  host: env("localhost", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cdea6dd6228ce76ec75a2d163150fb76"),
    },
  },
});
