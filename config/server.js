module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6718808f3e88b7c89da247fad6a0840c'),
    },
  },
});

app.listen(process.env.PORT || 1337);