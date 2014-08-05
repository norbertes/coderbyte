function SimpleSymbols(str) {
  // Przeiteuj po zdaniu
  for(var i = 0; i < str.length; i++){
    // Znajdz litere
    if(/^[a-zA-Z]+$/.test(str[i])){
      if(i == 0){
        return false;
      }
      // Sprawdz czy znak przed i po niej to +, jesli nie, to zwroc false
      if((str[i-1].indexOf('+') < 0) || (str[i+1].indexOf('+') < 0)){
        return false;
      }
     }
  }
  return true;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());