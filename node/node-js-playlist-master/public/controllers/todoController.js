module.exports = function(app){


	//render template

	app.get('/todo',function(req,res){
		res.render('todo');
	});

	//get the post

	app.post('/todo',function(req,res){

	});

	//delete the post

	app.delete('/todo',function(req,res){


	});







};
