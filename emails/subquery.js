const db = require("../models");
const Op = Sequelize.Op;

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
