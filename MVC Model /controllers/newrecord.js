module.exports =function(app) {
	app.get('/users/NewRecord',function(req,res){
		res.render('newrecord');

	});
app.post('/users/NewRecord',function(req,res){
		res.render('newrecord');
});
}