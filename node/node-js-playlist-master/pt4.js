var fs = require('fs');


// 동 기 적 Syncronous


var readMe = fs.readFileSync('readthis.txt','utf8');
console.log(readMe);

fs.writeFileSync('writeme.txt',readMe);


// 비 동 기 적 asynchronous

fs.readFile('readthis.txt','utf8',function(err,data){
	fs.writeFile('write.txt',data);
})

//Making directory (sync)

fs.mkdirSync('stuff');

//Deleting directory (sync)

fs.rmdirSync('stuff');

//Making directory (asyn)

fs.mkdir('stuff',function(){
	fs.readFile('readthis.txt','utf8',function(err,data){
		fs.writeFile('./stuff/writeMe.txt',data);
	})
});

//Deleting dir with readFileSync

fs.unlink('./stuff/writeMe.txt',function(){
	fs.rmdir('stuff');
})
