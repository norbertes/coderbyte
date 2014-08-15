var isOdd = function(num){
	if(num % 2 == 1) return true;
	else return false;
}
function DashInsert(num) {
	var res = '';
	num = num.toString();
	for(var i = 0; i < num.length; i++){
		if(i == 0 && isOdd(num[i]) && isOdd(num[i+1])){
			res += num[i]+'-';
		}
		else if(isOdd(num[i]) && isOdd(num[i+1]) ){
			res += num[i]+'-';
		}
		else{
			res += num[i];
		}
	}
	return res;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());
