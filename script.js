$(document).ready(function () {
  console.log("ready!");

  var showTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").append(showTime);
});
