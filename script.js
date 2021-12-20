//Todays Date Displayed at the top of the calendar
var todayDate = moment().format ('dddd, MMM Do YYYY');

for (var i=9; i < 18; i++) {
    //creating 8 blocks
    var row = $(`<div data-time=${i} id='${i}' class="row">`);
    //time block 9-5
    var time = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');
    
}

var displayDay = function() {
    $("#currentDay").text(currentDay);
};





//local storage
$(".saveBtn").on("click", function(){
    var selection = $(this).siblings("description").val().trim();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, selection);
})

//Pull time from local storage
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12AM .description").val(localStorage.getItem("12AM"));
$("#1AM .description").val(localStorage.getItem("1AM"));
$("#2AM .description").val(localStorage.getItem("2AM"));
$("#3AM .description").val(localStorage.getItem("3AM"));
$("#4AM .description").val(localStorage.getItem("4AM"));
$("#5AM .description").val(localStorage.getItem("5AM"));