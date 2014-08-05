var findLargest = function(arr){
  var biggest = 0;
  arr.forEach(function(pos){
    if(pos > biggest) biggest = pos;
  });
  return biggest;
}
function ArrayAddition(arr) {
  var result = 0,
      largest = findLargest(arr);
  arr.forEach(function(pos){
    if(pos != largest) result += pos;
  });

  if(result >= largest) return true;
  return false;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArrayAddition(readline());