// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(window).load(function() {
//dom not only ready, but everything is loaded
//the current day is displayed at the top of the calendar

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY,  h:mm a'));

  let currentHour = dayjs().hour() // gets current hour
  
  const scheduleContainer = $('.container-lg');

  $('.saveBtn').on('click', function (e) {
    let textarea = $(this).siblings('textarea');
    let parent = $(this).parent();
    // console.log(textarea);
    localStorage.setItem(parent.attr('id'), textarea.val());
    // localStorage.setItem("hour-10", hour-10);
    // localStorage.setItem("hour-11", hour-11);

  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $('.time-block').each(function () {
    // console.log(this);
    let timeId = $(this).attr('id');
    let parsedTimeId = Number.parseInt(timeId.split('-')[1]);
    console.log(parsedTimeId);
    if (parsedTimeId === 11) {
      console.log('on current block', timeId, currentHour);
      $(this).addClass('present');
    }

    if (parsedTimeId < currentHour) {
      $(this).addClass('past');
      console.log('on current block', timeId, currentHour);
    }

    if (parsedTimeId > currentHour) {
      $(this).addClass('future');
      console.log('on current block', timeId, currentHour);
    }
    
    

  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // $('.')

  // TODO: Add code to display the current date in the header of the page.


});
// });