/* eslint-disable no-unused-vars */
require("dotenv").config();
var express = require("express");
const db = require("../models");
var app = express();
var port = process.env.PORT || 3000;
var config = require(__dirname + "/../config/config.js");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

// eslint-disable-next-line prettier/prettier
let findSubs = async (callback) => {
  let initData = [];
  let newArray = [];
  var emailArray = [];
  initData = await db.subscription
    .findAll({
      include: [{ model: db.users }]
    })
    .then(function(dbsubscription) {
      // res.json(dbsubscription);
      initData = dbsubscription;
      // console.log(initData);
      initData.forEach(v => {
        let newObj = {};
        let day = moment().date();
        // console.log(v.dueDate);
        let momentDate = createDate(v.dueDate);
        newObj.userId = v.userId;
        // console.log(v.user);
        newObj.email = v.user.emailAddress;
        // console.log(v.user.email);
        newObj.name = v.user.fullName;
        // console.log(v.user.fullName);
        newObj.dueDate = momentDate;
        newArray.push(newObj);
      });
      // console.log("post convert", newArray);
      newArray.forEach(v => {
        let momentDate = moment(v.dueDate);
        // console.log(momentDate);
        let checkDate = moment().add(7, "days");
        // console.log("checkDate", checkDate);
        if (momentDate <= checkDate) {
          emailObj = {
            name: v.name,
            email: v.email
          };
          emailArray.push(emailObj);
        } else {
          // console.log("duedate to far into the future:", v.dueDate);
        }
      });
      console.log("email array:", emailArray);
      callback(emailArray);
    });
};

// findSubs();

function createDate(data) {
  // console.log("createDate data:", data);
  let day = moment().date(data);
  // let string = day.toString();
  let currentDate = moment().date();
  if (data < currentDate) {
    day = moment().add({ months: 1 });
    // console.log(string);
    let futureDate = day;
    // console.log(futureDate);
    return futureDate;
  } else {
    // console.log("Not modified:", string);
    return day;
  }
}

module.exports = findSubs;
