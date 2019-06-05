var db = require("../models");

module.exports = findDueSubs function() {
    db.subscription.findAll({ include: [ subscription ] })
    .then(function(res) {
        if (res) {
          res.status(200);
          console.log("query successful");
          
        } else {
          res.status(500);
         console.log("query failed");
        }
      });
};