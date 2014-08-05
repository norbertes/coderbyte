function NumberAddition(str) {
  var result = 0,
      number = 0;
  for(var i = 0; i <= str.length; i++){
    if(/[0-9]/.test(str[i])){
       number += str[i];
    }
    else if(number){
      result += number | 0;
      number = 0;
    }
  }
  return result;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());