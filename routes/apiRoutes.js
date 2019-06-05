/* eslint-disable no-unused-vars */
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/subs", function(req, res) {
    db.subs.findAll({}).then(function(dbsubs) {
      res.json(dbsubs);
    });
  });

  // Delete an example by id
  app.delete("/api/subs/:id", function(req, res) {
    db.subs.destroy({ where: { id: req.params.id } }).then(function(res) {
      res.json(res);
    });
  });

  // Creat Subscription
  app.post("/api/subs", function(req, res) {
    db.subscription
      .create({
        subscriptionName: req.body.subscriptionName,
        category: req.body.categoryType,
        amount: req.body.amount,
        dueDate: req.body.dueDate,
        user: req.body.userId
      })
      .then(function(res) {
        if (res) {
          res.status(200);
          res.send("Successfully Stored");
        } else {
          res.status(409);
          res.send("Sorry something went wrong");
        }
      });
  });

  // update subscription
  app.put("/api/subs/:id", (req, res) => {
    db.subscription
      .update(
        {
          subscriptionName: req.body.subscriptionName,
          category: req.body.categoryType,
          amount: req.body.amount,
          dueDate: req.body.dueDate
        },
        {
          where: req.params.id
        }
      )
      .then(function(res) {
        if (res) {
          res.status(200);
          res.send("Successfully Stored");
        } else {
          res.status(409);
          res.send("Sorry something went wrong");
        }
      });
    res.redirect("/subs");
  });
};
