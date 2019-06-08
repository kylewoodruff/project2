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

  let initData = [
    {
      id: 1,
      suscriptionName: "Hulu",
      dueDate: 10,
      amount: 12.99,
      createdAt: "1/1/19",
      updatedAt: "1/1/19",
      userId: 1
    },
    {
      id: 2,
      suscriptionName: "Netflix",
      dueDate: 22,
      amount: 12.99,
      createdAt: "2/2/19",
      updatedAt: "2/2/19",
      userId: 1
    },
    {
      id: 3,
      suscriptionName: "Hulu",
      dueDate: 16,
      amount: 12.99,
      createdAt: "4/4/19",
      updatedAt: "4/4/19",
      userId: 2
    },
    {
      id: 4,
      suscriptionName: "Hulu",
      dueDate: 10,
      amount: 12.99,
      createdAt: "5/5/19",
      updatedAt: "5/5/19",
      userId: 2
    }
  ];

  function getDate(data) {
    let day = moment().date(data);
    let month = moment().month();
    let fullDate = moment(0, month, day);
    console.log(fullDate);
    return fullDate;
  }
  // db.subscription.findAll({}).then(function(res) {
  //   if (res) {
  //     res.status(200);
  //     console.log("query successful");
  //     initData = res;
  //   } else {
  //     res.status(500);
  //     console.log("query failed");
  //   }
  // });

  initData.forEach(i => {
    if (i.dueDate <= 21) {
      let currentDate = moment().date(i.dueDate);
      console.log(currentDate);
      // let futureDate = moment(currentDate).add({ months: 1 });
      console.log(futureDate);
    } else {
      getDate(i.dueDate);
    }
  });
};

// findSubs();
let day = moment().date();;
console.log("");

let initData = [
  {
    id: 1,
    suscriptionName: "Hulu",
    dueDate: 1,
    amount: 12.99,
    createdAt: "1/1/19",
    updatedAt: "1/1/19",
    userId: 1
  },
  {
    id: 2,
    suscriptionName: "Netflix",
    dueDate: 22,
    amount: 12.99,
    createdAt: "2/2/19",
    updatedAt: "2/2/19",
    userId: 1
  },
  {
    id: 3,
    suscriptionName: "Hulu",
    dueDate: 16,
    amount: 12.99,
    createdAt: "4/4/19",
    updatedAt: "4/4/19",
    userId: 2
  },
  {
    id: 4,
    suscriptionName: "Nextflix",
    dueDate: 28,
    amount: 12.99,
    createdAt: "5/5/19",
    updatedAt: "5/5/19",
    userId: 2
  }
];

initData.forEach(i => {
  console.log(i.dueDate);
  if (i.dueDate <= day) {
    console.log("Next month", true);
    let arrayDate = createDate(i.dueDate);
      // console.log(arrayDate);
      let futureDate = moment(arrayDate).add({ months: 1 });
      console.log("Future:",futureDate);
  } else {
    createDate(i.dueDate);
  }
});

function createDate(data) {
  let day = moment().date(data);
  let month = moment().month();
  let fullDate = moment(month.toString() + "-" + day.toString(), "MM-DD");
  // console.log("Full Date:", fullDate);
  return fullDate;
}

module.exports = findSubs;
