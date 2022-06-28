function createAdder(baseNumber){
	return function(numberToAdd){
		return baseNumber + numberToAdd;
	}
}

var test1 = createAdder(10);

console.log(test1(2));
console.log(test1(0));