/* eslint-disable no-unused-vars */
//var passport = require("../../config/passport-setup")
$(document).ready(function() {
  $("#saveBtnn").on("click", function() {
    let subs = {
      subscriptionName: $("#subscriptionName").val(),
      categoryType: $(".category").val(),
      dueDate: $("#date").val(),
      amount: $("#price").val()
    };

    $.post("api/subs", subs, function(res) {
      console.log(res);
    });
    document.location.reload(true);
  });
  var results;
  $.get("api/subs", function(data) {
    results = data;
    console.log(results);

  });
});
