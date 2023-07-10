$(document).ready(function() {

// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //






  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


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


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

var $saveBtn = $('.saveBtn')

$saveBtn.on('click')


