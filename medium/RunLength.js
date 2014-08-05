function RunLength(str) {
  var strLn = str.length,
      ret = '',
      letter = null,
      letterCnt = 0;
  for(var i = 0; i <= strLn; i++){
    if( letter != str[i]){
      if(letterCnt != 0){
        ret += letterCnt + letter;
      }
      letter = str[i];
      letterCnt = 1;
    }
    else{
      letterCnt++;
    }
  }
  return ret;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());