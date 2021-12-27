//Todays Date Displayed at the top of the calendar
var todayDate = moment().format ('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var currentHour = moment().hours()


$(".saveBtn").on("click",function(){
    var value = $(this).siblings(".description").val()
    var timeKey = $(this).parent().attr("id")
localStorage.setItem(timeKey,value)

})


$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))


function updateCss(){
    $(".time-block") .each(function(){
        var divTime = $(this).attr("id")
        if(divTime > currentHour){
            $(this).addClass("future")
        }
        else if(divTime === currentHour){
            $(this).addClass("present")
        }
        else if(divTime < currentHour){
            $(this).addClass("past")
        }

    })
}
updateCss()