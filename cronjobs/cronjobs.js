const CronJob = require("../node_modules/cron").CronJob;
const fs = require("fs");
// eslint-disable-next-line no-unused-vars
const sendEmail = require("../emails/sendgrid");
// eslint-disable-next-line no-unused-vars
const findSubs = require("../emails/subquery");

let emailJob = async () => {
  console.log("Before job instantiation");
  const job = new CronJob(
    // cron timer set for every day
    "10 * * * * *",
    async () => {
      const d = new Date();
      // console.log("Midnight:", d);
      // console.log("My Cron Job");
      fs.appendFile("timerlog.txt", job.lastDate() + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Log was updated!");
      });
      // eslint-disable-next-line no-unused-vars
      let subsArray = await findSubs(function(data) {
        console.log(data);
        data.forEach(i => {
          // eslint-disable-next-line no-unused-vars
          sendEmail(i.email, i.name, function(res) {
            console.log(res);
          });
        });
      });
      console.log(subsArray);
      d;
    },
    null,
    true,
    "America/Phoenix"
  );
  console.log("After job instantiation");
};
// emailJob();

module.exports = emailJob;
