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

// Getting the day # of the year taking leap years into account
function isLeapYear(date) {
  var year = date.getFullYear();
  if((year & 3) != 0) return false;
  return ((year % 100) != 0 || (year % 400) == 0);
};

function getDOY(date) {
  var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var mn = date.getMonth();
  var dn = date.getDate();
  var dayOfYear = dayCount[mn] + dn;
  if(mn > 1 && isLeapYear(date)) dayOfYear++;
  return dayOfYear;
};

$(document).ready(function() {
  console.log("Hiya! Let's do this thing.");

  displayTime();
  setInterval(displayTime, 1000);
  
  // raw new Date
  $('#moment').html(currently);
  $('#date').html(formattedDatesWithLeadingZero(currently));
  $('#month_of_the_year').html(monthOfTheYear(currently));
  $('#day_of_the_month').html(currentlyDayOfMonth);
  $('#day_of_the_week').html(currentlyDayOfWeek);
  $('#day_of_the_year').html(getDOY(currently));
});

