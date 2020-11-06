
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

// for each loop to only get number from timeBlock class (id)
$(".timeBlock").each(function() {
var hourBlock = parseInt($(this).attr("id").replace(/[^\d]/g, ''), 10);
console.log(hourBlock);

// Apply future, present, or past css if:
if (hourBlock > currentHour) {
    $(this).addClass("future");
}
if (hourBlock === currentHour) {
    $(this).addClass("present");
}
if (hourBlock < currentHour) {
    $(this).addClass("past");
}
});

// DateTime.local().toFormat("HH 'hours and' mm 'minutes'"); //=> '20 hours and 55 minutes'
