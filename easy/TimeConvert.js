function TimeConvert(num) {
  var hrs = Math.floor(num / 60);
  var mts = num - (hrs * 60);
  // code goes here
  return hrs+':'+mts;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());