const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

let findSubs = function() {
  // Use moment to get the current date (now).
  let now = moment();
  // console.log(now, "Current date");

  // Use moment to get the date 1 week from now.
  let futureDate = moment()
    .add({ weeks: 1 })
    .date();
  // console.log(futureDate, "future date");

  // Build loop for and Use moment to get the month/year of with the stored date.
  let dayOfMonth = now.date();
  // console.log(dayOfMonth);

  let initData = [];

  db.subscription.findAll({}).then(function(res) {
    if (res) {
      res.status(200);
      console.log("query successful");
      initData = res;
      initData.forEach(i => {
        
        
      });
    } else {
      res.status(500);
      console.log("query failed");
    }
  });

};

findSubs();

module.exports = findSubs;
