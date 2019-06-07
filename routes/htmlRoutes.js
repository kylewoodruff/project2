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
  });

  //authlogout
  app.get("/logout", (req, res) => {
    //handle with passport
    res.send("logging out");
  });

  //auth with google
  app.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

  app.get("/google/callback", passport.authenticate("google"), function(
    req,
    res
  ) {
    res.redirect("/sub");
  });

  // Load example page and pass in an example by id
  app.get("/sub", function(req, res) {
    //db.subscription
    //.findAll({
    //where: {
    //todo: validate data coming from passport
    //userId: req.user.userId
    //}
    // })
    //.then(function(result) {
    // var hbsObject = {
    //subscription: result
    // };
    //res.render("subs", hbsObject);
    res.render("subs");
    //})
    //.catch(function(err) {
    // res.status(500).send(err);
    //});
  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
