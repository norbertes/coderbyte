function StringReduction(str, result) {
	str = str.split('');
	var one = str.shift(),
		two = str.shift() || false,
		res = result || '',
		sum = one + two;
	if( two && one != two ){
		if(sum.indexOf('a') == -1){
			res += 'a';
		}
		else if(sum.indexOf('b') == -1){
			res += 'b';
		}
		else{
			res += 'c';
		}
	}
	else{
		res += sum;
	}
	if(str.length){
		StringReduction(str.join(''),res);
	}
	else{
		res = res.split('').sort(function(a,b){
			return b.charCodeAt()-a.charCodeAt()
		}).join('');
		if(res[0] == res[res.length -1]){
			return res.length;
		}
		else{
			StringReduction(res);
		}
	}
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
StringReduction(readline());