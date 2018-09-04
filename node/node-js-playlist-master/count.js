var counter = function(arr){
	return arr.length;
}



module.exports = counter;

//이렇게 하면 implement받는 곳에서
//var counter = require('./counter.js')를 함으로써 쓸 수 있다.


//만약 여러개의 변수를 가져오고 싶다면 어떻게 할까?
//예를 들어 계산 기능 전체를 가져오고 싶은 것이다.

var adder = function(a,b){
 return a+b;
}

var multiply = function(a,b){

	return a*b;

}

var pi = 3.1415;


//첫 번째로 생각해야 할 것은 module.exports를 할 때 module은 객체라는 점이다.
//그것도 비어있는 객체
//그럼 속성을 각각 주면 된다는 것임

module.exports.adder = adder;
module.exports.multiply = multiply;
module.exports.pi = pi;


//이렇게 아니면

module.exports = {
	adder : adder,
	muliply : multiply,
	pi : pi

}


//쓸 때는 그럼
// var calculator= require('./count.js'); 하고 calculator.adder(3,4) 이런식으로 써주면 된다.
