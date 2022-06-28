var isValid = true;

function Boolean(variable){

	if(typeof variable == 'boolean'){
		return !variable;
	}else{
		console.log('Warning! not a boolean');
	}
}

console.log(Boolean('df'));