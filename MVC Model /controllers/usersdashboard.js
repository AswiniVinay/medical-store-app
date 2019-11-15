module.exports =function(app) {
	app.get('/users',function(req,res){
		res.render('usersdashboard');

	});
app.post('/users',function(req,res){
		res.render('usersdashboard');
});
}