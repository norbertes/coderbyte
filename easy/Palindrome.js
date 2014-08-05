function Palindrome(str) {
  var reverted = '',
      strNoSpaces = '';

  strNoSpaces = str.split(' ').join('');
  reverted = strNoSpaces.split('').reverse().join('');

  if(reverted == strNoSpaces){
    return true;
  }else{
    return false;
  }
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());
