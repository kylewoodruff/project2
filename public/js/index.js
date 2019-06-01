$(document).ready(function () {
  /* global moment */

  // blogContainer holds all of our posts
  $("#saveButton").on("click", function () {
    var name = $("#nameInput").val().trim();
    var date = $("#dateInput").val()
    var subScript = $("#subInput").val().trim();
    console.log(name + date + subScript);

  });
  var subs;

  
  function createNewRow(subs) {
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostSubs = $("<h5>");
    newPostSubs.text(subs.Author.name);
    newPostSubs.css({
      float: "right",
      color: "blue",
      "margin-top": "-10px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostSubs);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("subs", subs);
    return newPostCard;
  };


  







});
