function VowelCount(str) {
  vowelsCnt = 0;
  for(var i = 0, strln = str.length; i < strln; i++){
    if(/^[aeiou]+$/.test(str[i])){
      vowelsCnt++;
    }
  }

  // code goes here
  return vowelsCnt;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());