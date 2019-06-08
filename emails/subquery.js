/* eslint-disable no-unused-vars */
require("dotenv").config();
var express = require("express");
const db = require("../models");
var app = express();
var port = process.env.PORT || 3000;
var config = require(__dirname + "/../config/config.js");
// var Sequelize = require("sequelize");
// const Op = Sequelize.Op;
const moment = require("moment");

let findSubs = function() {
  // let initData = [];
  let initData = [
    {
      id: 1,
      email: "kylewoodruff@gmail.com",
      name: "Kyle",
      suscriptionName: "Hulu",
      dueDate: 1,
      amount: 12.99,
      createdAt: "1/1/19",
      updatedAt: "1/1/19",
      userId: 1
    },
    {
      id: 2,
      email: "kylewoodruff@gmail.com",
      name: "Kyle",
      suscriptionName: "Netflix",
      dueDate: 13,
      amount: 12.99,
      createdAt: "2/2/19",
      updatedAt: "2/2/19",
      userId: 1
    },
    {
      id: 3,
      email: "jayxmiller@gmail.com",
      name: "Jay",
      suscriptionName: "Hulu",
      dueDate: 12,
      amount: 12.99,
      createdAt: "4/4/19",
      updatedAt: "4/4/19",
      userId: 2
    },
    {
      id: 4,
      email: "jayxmiller@gmail.com",
      name: "Jay",
      suscriptionName: "Nextflix",
      dueDate: 9,
      amount: 12.99,
      createdAt: "5/5/19",
      updatedAt: "5/5/19",
      userId: 2
    }
  ];

  // db.subscription.findAll({}).then(function (res) {
  //   initData = res;
  //   if (res) {
  //     // res.status(200);
  //     // console.log("query successful");
  //   } else {
  //     // res.status(500);
  //     console.log("query failed");
  //   }
  // });

  let newArray = [];
  initData.forEach((v, i) => {
    let day = moment().date();
    // console.log(v.dueDate);
    let newObj = {};
    newObj.userId = v.userId;
    newObj.email = v.email;
    newObj.name = v.name;
    if (v.dueDate <= day) {
      // console.log("Next month", true);
      let momentDate = createDate(v.dueDate);
      // console.log("momentDate:", momentDate);
      momentDate = moment().add({ months: 1 });
      let futureDate = momentDate;
      // console.log("Future:", futureDate);
      newObj.dueDate = futureDate;
      newArray.push(newObj);
    } else {
      let arrayDate = createDate(v.dueDate);
      // console.log(arrayDate);
      newObj.dueDate = arrayDate;
      newArray.push(newObj);
    }
  });
  // console.log("post convert", newArray);

  function createDate(data) {
    let day = moment().date(data);
    let month = moment().month();
    let string = month.toString() + "-" + day.toString();
    console.log(string);
    // let fullDate = moment().format(string);
    // console.log("Full Date:", fullDate);
    return string;
  }
  return newArray;
};

findSubs();
// let initData = [
//   {
//     id: 1,
//     suscriptionName: "Hulu",
//     dueDate: 1,
//     amount: 12.99,
//     createdAt: "1/1/19",
//     updatedAt: "1/1/19",
//     userId: 1
//   },
//   {
//     id: 2,
//     suscriptionName: "Netflix",
//     dueDate: 22,
//     amount: 12.99,
//     createdAt: "2/2/19",
//     updatedAt: "2/2/19",
//     userId: 1
//   },
//   {
//     id: 3,
//     suscriptionName: "Hulu",
//     dueDate: 6,
//     amount: 12.99,
//     createdAt: "4/4/19",
//     updatedAt: "4/4/19",
//     userId: 2
//   },
//   {
//     id: 4,
//     suscriptionName: "Nextflix",
//     dueDate: 7,
//     amount: 12.99,
//     createdAt: "5/5/19",
//     updatedAt: "5/5/19",
//     userId: 2
//   }
// ];
// // console.log("initial array", initData);
// let newArray = [];

// initData.forEach((v, i) => {
//   let day = moment().date();
//   // console.log(v.dueDate);
//   let newObj = {};
//   newObj.userId = v.userId;
//   if (v.dueDate <= day) {
//     // console.log("Next month", true);
//     let momentDate = createDate(v.dueDate);
//     // console.log("momentDate:", momentDate);
//     momentDate = moment().add({ months: 1 });;
//     let futureDate = momentDate;
//     console.log("Future:", futureDate);
//     newObj.dueDate = futureDate;
//     newArray.push(newObj);
//   } else {
//     let arrayDate = createDate(v.dueDate);
//     // console.log(arrayDate);
//     newObj.dueDate = arrayDate;
//     newArray.push(newObj);
//   }
// });
// // console.log("post convert", newArray);

// function createDate(data) {
//   let day = moment().date(data);
//   let month = moment().month();
//   let string = month.toString() + "-" + day.toString();
//   console.log(string);
//   // let fullDate = moment().format(string);
//   // console.log("Full Date:", fullDate);
//   return string;
// }

module.exports = findSubs;
