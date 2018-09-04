
//normal function statement

function callFunction(func){
	func();

}

//function expression

var sayBye = function(){
	console.log('bye');
}

callFunction(sayBye);
