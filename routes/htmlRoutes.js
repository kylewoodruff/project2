/* eslint-disable no-unused-vars */
var path = require("path");
const passport = require("passport");

module.exports = function (app) {
  // Load index page
  app.get("/launch", function (req, res) {
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
    passport.authenticate("google", {
      scope: ["profile"]
    })
  );

  // Load example page and pass in an example by id
  app.get("/sub", function (req, res) {
    res.render("subs");
  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
