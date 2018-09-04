var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){

	console.log('request has been made: '+ req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});
	var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
	myReadStream.pipe(res); //이게 res stream으로 뺀다는것임 ㅇㅇ


});

server.listen(3000,'127.0.0.1');
