function ExOh(str) {
  var cntX = 0,
      cntY = 0,
      strLn = str.length;
  for(var i = 0; i < strLn; i++){
    if(str[i].indexOf('x') == 0){
      cntX++;
    }
    else if(str[i].indexOf('o') == 0){
      cntY++;
    }
  }

  if(cntX == cntY){
    return true;
  }
  else{
    return false;
  }
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());