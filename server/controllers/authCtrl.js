const { DOMAIN, CLIENT_ID, CLIENT_SECRET, REACT_APP_CLIENT } = process.env,
  passport = require("passport"),
  AuthStrategy = require("passport-auth0");

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new AuthStrategy(
      {
        domain: DOMAIN,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "/login",
        scope: "openid"
      },
      (accessToken, refreshToken, extraParams, profile, done) =>
        done(null, profile)
    )
  );

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  app.get(
    "/login",
    passport.authenticate("auth0", {
      successRedirect: "/success",
      failureRedirect: "/failure"
    })
  );

  app.get("/success", (req, res) => {
    console.log(req.user);
    res.redirect(REACT_APP_CLIENT);
  });
};
