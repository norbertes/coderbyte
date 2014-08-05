function LongestWord(sen) {
  var senWords = sen.split(' '),
      longest = '',
      longestCnt = 0;
  for(var j = 0; j < senWords.length; j++){
    if(senWords[j].replace(/[^\w\s]/gi, '').length > longestCnt){
      longestCnt = senWords[j].replace(/[^\w\s]/gi, '').length;
      longest = senWords[j].replace(/[^\w\s]/gi, '');
    }
  }
  return longest;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());