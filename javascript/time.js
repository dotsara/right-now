"use strict";

var currently = new Date();

var currentlyDayOfWeek = dayOfTheWeek(currently.getDay());
var currentlyDayOfMonth = currently.getDate();

function dayOfTheWeek(day) {
  switch (day) {
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
  };

  return day;
};

function monthOfTheYear(month) {
  switch (month.getMonth()) {
      case 0:
          month = "January";
          break;
      case 1:
          month = "February";
          break;
      case 2:
          month = "March";
          break;
      case 3:
          month = "April";
          break;
      case 4:
          month = "May";
          break;
      case 5:
          month = "June";
          break;
      case 6:
          month = "July";
          break;
      case 7:
          month = "August";
          break;
      case 8:
          month = "September";
          break;
      case 9:
          month = "October";
          break;
      case 10:
          month = "November";
          break;
      case 11:
          month = "December";
          break;
  };

  return month;
};

function formattedDatesWithLeadingZero(date) {
  var month = date.getMonth();
  var day = date.getDate();

  if (month < 9) {
    month = "0" + (month + 1);
  } else {
    month = month + 1;
  };

  if (day <= 9) {
    day = "0" + day;
  };

  var formatted_date = month + "-" + day + "-" + date.getFullYear();
  return formatted_date;
};

$(document).ready(function() {
  console.log("Hiya! Let's do this thing.");

  // raw new Date
  $('#moment .content').html(currently);
  $('#fancy').html(formattedDatesWithLeadingZero(currently));
  $('#month_of_the_year .content').html(monthOfTheYear(currently));
  $('#day_of_the_month .content').html(currentlyDayOfMonth);
  $('#day_of_the_week .content').html(currentlyDayOfWeek);
});

