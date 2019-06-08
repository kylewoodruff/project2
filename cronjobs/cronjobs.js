const CronJob = require("../node_modules/cron").CronJob;
const fs = require("fs");
// eslint-disable-next-line no-unused-vars
const sendEmail = require("../emails/sendgrid");
const FindSubs = require("../emails/subquery");

let emailJob = function() {
  console.log("Before job instantiation");
  const job = new CronJob(
    // cron timer set for every min
    "* * * * *",
    function() {
      const d = new Date();
      console.log("Midnight:", d);
      console.log("My Cron Job");
      fs.appendFile("timerlog.txt", job.lastDate() + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Log was updated!");
      });
      let subsArray = 
      d;
    },
    null,
    true,
    "America/Phoenix"
  );
  console.log("After job instantiation");
};
emailJob();

module.exports = emailJob;
