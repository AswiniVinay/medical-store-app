module.exports =function(app) {
	app.get('/users/displayRecords',function(req,res){
		res.render('displayRecords');

	});
app.post('/users/displayRecords',function(req,res){
		res.render('displayRecords');
});
}