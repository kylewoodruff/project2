const CronJob = require("../node_modules/cron").CronJob;
const fs = require("fs");
// eslint-disable-next-line no-unused-vars
const sendEmail = require("../emails/sendgrid");
// eslint-disable-next-line no-unused-vars
const FindSubs = require("../emails/subquery");

let emailJob = function() {
  console.log("Before job instantiation");
  const job = new CronJob(
    // cron timer set for every day
    "30 * * * * *",
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
      let subsArray = FindSubs();
      console.log(subsArray);

      // subsArray.forEach(i => {
      //   sendEmail(i.email, i.name, function(res) {
      //     console.log(res);
      //   });
      // });

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
