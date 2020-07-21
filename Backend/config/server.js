module.exports = ({ env }) => ({
  host: env("localhost", "0.0.0.0"),
  port: env.int("PORT", 1337),
});
