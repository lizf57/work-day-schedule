// When I open the planner, the current day is displayed at the top of the calender.

$(document).ready(function() {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});

  
// When I view the time blocks each day, each time block is color-coded to indicate whether it is in the past, present, or future.

  var $timeBlock = $('.time-block')

  $timeBlock.each(function(){
    var $timeBlock = $(this)
    var currentHour = dayjs().hour()
    var blockHour = parseInt($timeBlock.attr('id').split('-')[1])
  
    console.log(blockHour)

    var timeClass
    if(blockHour === currentHour){
      timeClass = 'present'
    } else if (blockHour < currentHour){
      timeClass = 'past'
    } else {
      timeClass = 'future'
    }
    $timeBlock.addClass(timeClass)
  })


  // When I click into a time block, I can enter an event.
  // When I click save for that time block, the text for that event is saved in local storage.

var $saveBtn = $('.saveBtn')

$('.saveBtn').on('click' , function(){
  var saveText = $(this).siblings('.description').val()
  var blockHour = parseInt($(this).parent().attr('id').split('-')[1])

  localStorage.setItem(blockHour, saveText);
})

// When I refresh the page, then the saved events persist.

$('#hour-9 .description').val(localStorage.getItem("9"))
$('#hour-10 .description').val(localStorage.getItem("10"))
$('#hour-11 .description').val(localStorage.getItem("11"))
$('#hour-12 .description').val(localStorage.getItem("12"))
$('#hour-13 .description').val(localStorage.getItem("13"))
$('#hour-14 .description').val(localStorage.getItem("14"))
$('#hour-15 .description').val(localStorage.getItem("15"))
$('#hour-16 .description').val(localStorage.getItem("16"))
$('#hour-17 .description').val(localStorage.getItem("17"))
