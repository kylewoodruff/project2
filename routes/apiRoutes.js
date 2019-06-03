var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/subs", function(req, res) {
    db.subs.findAll({}).then(function(dbsubs) {
      res.json(dbsubs);``
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

  var db = require("../models");

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

  //route for Subscription Page
  app.get("/subs", function(req, res) {
    db.subscription.findAll({}).then(function(err, results) {
      if (err) {
        throw err;
      }
      res.render("subs", {
        results: results
      });
    });
  });

  // route for insert data
  app.post('/save', function(req, res){
     db.subscription
    .create({
      subscriptionName: req.body.subscriptionName, 
      category: req.body.categoryType,
      amount: req.body.amount,
      dueDate: req.body.dueDate
    }).then(function(test){
      if(test){
        res.status(200);
        res.send("Successfully Stored")
      } else {
        res.render.alert("Sorry something went wrong")        
      }
  })      
    })
  

  //route for update data
  // app.post('/update',(req, res) => {
  //   let sql = "UPDATE subscription SET subscriptionName='"+req.body.subscriptionName+"', amount='"+req.body.amount+"' WHERE id="+req.body.id;
  //   let query = conn.query(sql, (err, results) => {
  //     if(err) throw err;
  //     res.redirect('/');
  //   });
  // });

  //route for delete data
  // app.post('/delete',(req, res) => {
  //   let sql = "DELETE FROM subscription WHERE id="+req.body.id+"";
  //   let query = conn.query(sql, (err, results) => {
  //     if(err) throw err;
  //       res.redirect('/');
  //   });
  // });


};
