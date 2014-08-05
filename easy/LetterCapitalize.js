function LetterCapitalize(str) {
  var uppercase = true;
  var modifiedString = '';
  for(var i = 0; str.length > i; i++){
    if( uppercase == true ){
      modifiedString += str[i].toUpperCase();
      uppercase = false;
    }
    else{
      if(str[i].indexOf(' ') > -1){
        uppercase = true;
      }else{
        uppercase = false;
      }
      modifiedString += str[i];
    }
  }

  // code goes here
  return modifiedString;

}