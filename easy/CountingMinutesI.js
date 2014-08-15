var timeToTimestamp = function(time){
  var DateHour = ~~time.split(':')[0],
      DateMinutes = ~~time.split(':')[1].substring(0,2),
      DateDay = time.split(':')[1].substring(2,4);
  return (DateHour * 60) + DateMinutes + (DateDay == 'pm' ? 60 * 12 : 0);
}
function CountingMinutesI(str) {
  var firstDate = timeToTimestamp(str.split('-')[0]),
      secondDate = timeToTimestamp(str.split('-')[1]);

  return (secondDate-firstDate > 0 ? secondDate-firstDate : secondDate-firstDate+1440);
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());