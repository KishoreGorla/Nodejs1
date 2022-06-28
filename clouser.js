function greetMaker(name){
    	function greet(){
    		console.log('Hello '+ name);
    
    	}
    	return greet;
    }
    
    var greetKishore = greetMaker('Kishore');
    greetKishore();