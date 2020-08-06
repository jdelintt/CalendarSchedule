$(document).ready(function () {
  //  var storedActivity =  localStorage.getItem(activityOfTheDay);
  var storedActivity = localStorage.getItem("activityOfTheDay: ");
  var save = $(".save-button");
  var activityType = $(".form-control");
  console.log("ready!");
  function showTime() {
    var showTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(showTime);
  }
  setInterval(showTime, 1000);

  save.on("click", function () {
    localStorage.setItem(
      "activityOfTheDay: ",
      JSON.stringify($(activityType).val())
    );
  });
});
