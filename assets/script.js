
// DateTime const for use with luxon DateTime
const DateTime = luxon.DateTime;

// Converting DateTime to LocaleString
var todaY = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', ordinal: 'number' });
console.log(todaY);

// Applied today's date to currentDay id
$("#currentDay").text(todaY);

// Getting currentHour from DateTime
var currentHour = DateTime.local().hour;
console.log(currentHour);

// DateTime.local().toFormat("HH 'hours and' mm 'minutes'"); //=> '20 hours and 55 minutes'
