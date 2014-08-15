function MeanMode(arr) {
  var mean = arr.reduce(function(prev, curr){ return prev + curr}) / arr.length;
    arr.sort();
  var letter = arr[0];
	cnt = 1,
	maxVal = 0,
    mode = arr[0];
    arr.forEach(function(a){
        if(letter == a){
            cnt++
        }
        else{
            if(cnt > maxVal){
                maxVal = cnt;
                mode = letter;
            }
            letter = a;
            cnt = 1;
        }
    });
  if(mean === mode){
  	return 1;
  }
  else{
  	return 0;
  }
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());