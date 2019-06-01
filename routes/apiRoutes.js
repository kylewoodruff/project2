var db = require("../models");

module.exports = function(app) {
  //all subs for user
  app.get("/", function(req, res) {
    db.subscription
      .findAll({})
      .then(function(result) {
        var hbsObject = {
          subscription: result
        };
        res.render("index", hbsObject);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });
  // add new
  app.post("/add", function(req, res) {
    db.subscription
      .create({
        subscriptionName: req.body.subscriptionName,
        amount: req.body.amount,
        dueDate: req.body.dueDate,
        user: req.body.user,
        category: req.body.category
      })
      .then(function(subscription) {
        res.send(subscription, "Subscription submitted to db");
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });
  //sequelize/express function for updating whether a book has been read
  app.put("/update/:id", function(req, res) {
    db.subscription
      .update(
        {
          dueDate: req.body.dueDate
        },
        //   if(dueDate=== todayDate)
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });
  //sequelize/express function for updating Amount of a subscription
  app.put("/update-amount/:id", function(req, res) {
    db.subscription
      .update(
        {
          amount: req.body.amount
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });
  //sequelize/express function for deleting a Subscription  from the model
  app.delete("/delete/:id", function(req, res) {
    db.subscription
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function() {
        res.status(200).send();
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });
};
