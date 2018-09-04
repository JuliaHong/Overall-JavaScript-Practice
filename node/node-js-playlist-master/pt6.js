var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

myReadStream.on('data',function(chunk){
	console.log('new chunk received: '); //so that we can load a data
	myWriteStream.write(chunk); //nowwhat we are doing we reading this data and get chunk of data and then we write a data into writeMe.txt
// so it can recieves a data much faster.

//as we do it really often to create and write stream we use a specific function called 'pipe'!!!!!!!

});
