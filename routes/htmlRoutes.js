/* eslint-disable no-unused-vars */
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("launch");
  });

  // Load example page and pass in an example by id
  app.get("/sub", function(req, res) {
    res.render("subs");
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
