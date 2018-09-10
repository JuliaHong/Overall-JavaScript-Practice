
//we have a access to express
var express = require('express');
//As we've got a express function. We need to fire it to use it.
var app = express();
//Inject body parser so that we can pass our post param to wherever we want to send
var bodyParser = require('body-parser');
//and then we will be storing them in this variable below.
var urlencodedParser = bodyParser.urlencoded({ extended: false });




//We need to inform to express that we are gonna use ejs as our view engine!!A
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
	res.render('index');
});
app.get('/contact',function(req,res){
	res.render('contact',{qs : req.query});
});

//when we hit the submit button , it will send a post request to contact url
//and we will handle that with the urlencodedParser and it will parse the data which we post


app.post('/contact',urlencodedParser,function(req,res){
	console.log(req.body);
	res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',function(req,res){
	var data = {age : 22, job : 'programmer' ,hobbies : ['eating','dancing','drinking']};
	res.render('profile',{person: req.params.name,data : data});
})





app.listen(3000);
