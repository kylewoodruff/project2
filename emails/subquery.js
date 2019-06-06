const db = require("../models");
const Op = Sequelize.Op;

// Use moment to get the current date (now).
// Use moment to get the date 1 week from now.
// Build loop for and Use moment to get the month/year of with the stored date.
// build conditional to handle if day of month is 31/30 or 28th
// build data call to check for subs inbetween Now and 1 week out from now.

let findSubsDue = function() {
  db.subscription
    .findAll({
      where: {
        dueDate: {
          [Op.lte]: 7
        }
      },
      include: [users]
    })
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
