function PrimeMover(num) {
	var i = 0,
		a = 1,
		primeCnt = 0,
		gotya = false;
	while(i != 1){
		gotya = false;
		for(var j = 2; j <= a; j++){
			if(a % j == 0 && a != 1 && a != j){
				gotya = true;
			}
			else if(a % j == 0 && a == j && !gotya){
				primeCnt++;
			}
		}
		a++;
		if(primeCnt == num){
			i = 1;
		}
	}
	return a-1;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());