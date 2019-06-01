const CronJob = require('../node_modules/cron').CronJob;
const fs = require("fs");

let emailJob = function () {
	console.log('Before job instantiation');
	// let timerObj = "' "+sec+" "+min+" "+hr+" "+dayOfMonth+" "+month+" "+dayOfWeek+" '";
	// let timerString = timerObj.toString();
	// console.log(timerString);
	const job = new CronJob('* * * * * *', function () {
		const d = new Date();
		console.log('Midnight:', d);
		console.log("My Cron Job");
		fs.appendFile("timerlog.txt", job.lastDate() , function(err) {
			if (err) {
			  return console.log(err);
			}
			console.log("Log was updated!");
		  });
d		  
	}, null, true, 'America/Phoenix');
	console.log('After job instantiation');
	// job.start();
};
emailJob();

module.exports = emailJob;

