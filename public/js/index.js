/* eslint-disable no-unused-vars */
//var passport = require("../../config/passport-setup")
$(document).ready(function() {
  $("#saveBtn").on("click", function() {
    let subs = {
      subscriptionName: $("#subscriptionName").val(),
      categoryType: $(".category").val(),
      dueDate: $("#date").val(),
      amount: $("#price").val()
    };
    console.log(subs);

    $.post("/api/subs", subs, function(response) {
      console.log(response);
    });
  });
});
