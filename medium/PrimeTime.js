function PrimeTime(num) {
  for(var i = 0; i < num; i++){
    if(i != 1 && num % i == 0){
      return false;
    }
  }
  return true;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());
