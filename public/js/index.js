/* eslint-disable no-unused-vars */
$(document).ready(function() {
  $("#saveBtn").on("click", function() {
    var name = $("#subscriptionName").val();
    var category = $(".category").val();
    var date = $("#date").val();
    var amount = $("#price").val();
  });

  //$("#mytable").on("click", handleSubFormSubmit);
  //showing data to edit modal
  $("#mytable").on("click", ".edit", function() {
    var user = $(this).data("user");
    var id = $(this).data("id");
    var subscriptionName = $(this).data("subscriptionName");
    var amount = $(this).data("amount");
    $("#EditModal").modal("show");
    $(".subscriptionName").val("subscriptionName");
    $(".category")
      .find(":selected")
      .text()
      .val("category");
    $("#price").val(amount);
    $(".id").val(id);
  });
  //showing delete record modal
  $("#mytable").on("click", ".delete", function() {
    var id = $(this).data("id");
    $("#DeleteModal").modal("show");
    $(".id2").val(id);
  });
});
