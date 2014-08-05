function SwapCase(str) {
  var result = '';
  for(var i = 0; i < str.length; i++){
    if(/[a-z]/.test(str[i])){
      result += str[i].toUpperCase();
    }
    else if(/[A-Z]/.test(str[i])){
      result += str[i].toLowerCase();
    }
    else{
      result += str[i];
    }
  }
  return result;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());