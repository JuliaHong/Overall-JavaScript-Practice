var fs = require('fs');

var readMe = fs.readFileSync('readthis.txt','utf8');
console.log(readMe);

fs.writeFileSync('writeme.txt',readMe);
