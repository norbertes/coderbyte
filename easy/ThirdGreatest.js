function ThirdGreatest(strArr) {
	strArr.sort(function(a,b){
		return b.length - a.length;
	});
	return strArr[2];
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());