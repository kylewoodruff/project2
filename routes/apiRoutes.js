var db = require("../models");
const conn= mysql.createConnection()
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
    db.subs.destroy({ where: { id: req.params.id } }).then(function (dbsubs) {
      res.json(dbsubs);
    });
  });

  var db = require("../models");

  // /route for homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM subscription";
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.render('subs',{
      results: results
    });
  });
});

//route for insert data
app.post('/save',(req, res) => {
  let data = {sub_name: req.body.sub_name, sub_price: req.body.sub_price};
  let sql = "INSERT INTO subscription SET ?";
  let query = db.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE subscription SET sub_name='"+req.body.sub_name+"', sub_price='"+req.body.sub_price+"' WHERE sub_id="+req.body.id;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM subscription WHERE sub_id="+req.body.sub_id+"";
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});

};
