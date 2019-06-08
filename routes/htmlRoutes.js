/* eslint-disable no-unused-vars */
var path = require("path");
const passport = require("passport");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("launch");
  });
  //Auth Login
  app.get("/login", (req, res) => {
    res.render("login");
    authCheck();
  });

  //authlogout
  app.get("/logout", (req, res) => {
    //handle with passport
    req.logout();
    res.redirect("/");
  });

  //auth with google
  app.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  //callback route after authentication
  app.get("/google/callback", passport.authenticate("google"), function(
    req,
    res
  ) {
    req.user;
    res.redirect("/sub");
  });

  const authCheck = (req, res, next) => {
    if (!req.user) {
      //if user is not logged in
      res.redirect("/google");
    } else {
      //if logged in
      next();
    }
  };
  // app.get("/", authCheck, (req, res) => {
  //   res.render("subs", {
  //     user: req.user
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/sub", function(req, res) {
    db.subscription
      .findAll({
        where: { userId: req.user.id }
      })
      .then(function(dbsubscription) {
        var hbsObject = {
          results: dbsubscription
        };
        console.log(hbsObject);
        res.render("subs", hbsObject);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
