const { DOMAIN, CLIENT_ID, CLIENT_SECRET, REACT_APP_CLIENT } = process.env;
const passport = require("passport");
const AuthStrategy = require("passport-auth0");

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

  passport.serializeUser((profile, done) => {
    console.log(profile);
    const db = app.get("db");
    db.get_user_by_authid(profile.id).then(user => {
      if (!user[0]) {
        db.add_user_by_authid(profile.id)
          .then(response => {
            console.log(response);
            return done(null, response[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, user[0]);
      }
    });
  });

  passport.deserializeUser((profile, done) => done(null, profile));

  app.get(
    "/login",
    passport.authenticate("auth0", {
      successRedirect: `${process.env.REACT_APP_CLIENT}/dashboard/content`,
      failureRedirect: "/"
      // failureFlash: true
    })
  );
  function authenticated(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.sendStatus(401);
    }
  }

  app.get("/success", (req, res) => {
    res.status(200).json(req.user);
  });
};
