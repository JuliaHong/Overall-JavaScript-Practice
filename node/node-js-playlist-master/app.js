console.log('hey node');
setTimeout(function(){
	console.log('3 seconds have passed')
},3000);

var time  = 0;
setInterval(function(){
	time+=1;
	console.log(time+'seconds have passed');
},1000)
