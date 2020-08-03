$(document).ready(function () {
  console.log("ready!");
  function showTime() {
    var showTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(showTime);
  }
  setInterval(showTime, 1000);
});
