const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const db = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user.googleId);
});

passport.deserializeUser(function(id, done) {
  db.users
    .findOne({
      where: { googleId: id }
    })
    .then(user => {
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

    function(accessToken, refreshToken, profile, email, done) {
      console.log(email);
      console.log(profile);
      console.log("first name: " + email.name.givenName);
      console.log("googleId: " + email.id);
      console.log("fullName: " + email.displayName);
      console.log("avatar: " + email.photos[0].value);
      console.log("lastName: " + email.name.familyName);
      console.log("emailAddress: " + email.emails[0].value);

      db.users
        .findOrCreate({
          where: {
            googleId: email.id
          },
          defaults: {
            googleId: email.id,
            firstName: email.name.givenName,
            lastName: email.name.familyName,
            fullName: email.displayName,
            emailAddress: email.emails[0].value,
            avatar: email.photos[0].value
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
