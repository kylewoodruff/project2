const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const db = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.Users.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for google strat
      callbackURL: "/google/callback",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      db.users
        .findOrCreate({
          where: {
            googleId: profile.id
          },
          defaults: {
            googleId: profile.id,
            fullName: profile.displayName,
            avatar: profile.photos[0].value
          }
        })
        .spread(function(user) {
          done(null, user);
        })
        .catch(function(err) {
          done(err, null);
        });
    }
  )
);
