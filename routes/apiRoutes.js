var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/subs", function(req, res) {
    db.subs.findAll({}).then(function(dbsubs) {
      res.json(dbsubs);
    });
  });

  // Create a new example
  app.post("/api/subs", function(req, res) {
    db.subs.create(req.body).then(function(dbsubs) {
      res.json(dbsubs);
    });
  });

  // Delete an example by id
  app.delete("/api/subs/:id", function(req, res) {
    db.subs.destroy({ where: { id: req.params.id } }).then(function(dbsubs) {
      res.json(dbsubs);
    });
  });
};
