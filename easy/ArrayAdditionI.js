function ArrayAdditionI(arr) {
  var maxVal = 0,
      result = 0;
  arr.sort(function(a,b){return a-b});
  maxVal = arr.pop();

  for(var i = 0, arrLn = arr.length; i < arrLn; i++){
    result = arr[i];
    for(var j = 0; j < arrLn; j++){
      if(i != j){
        result += arr[j];
        if(result == maxVal){
          return true;
        }
      }
    }
    for(var k = 0; k < arrLn; k++){
      if(i != k){
        result -= arr[k];
        if(result == maxVal){
          return true;
        }
      }
    }
  }
  return false;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());