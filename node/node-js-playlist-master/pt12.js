
//we have a access to express
var express = require('express');
//As we've got a express function. We need to fire it to use it.
var app = express();

//We need to inform to express that we are gonna use ejs as our view engine!!A
app.set('view engine','ejs');


app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});
app.get('/contact',function(req,res){
	res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:name',function(req,res){
	var data = {age : 22, job : 'programmer' ,hobbies : ['eating','dancing','drinking']};
	res.render('profile',{person: req.params.name,data : data});
})





app.listen(3000);
