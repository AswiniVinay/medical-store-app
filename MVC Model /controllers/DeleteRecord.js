module.exports =function(app) {
	app.get('/users/DeleteRecord',function(req,res){
		res.render('DeleteRecord');

	});
app.post('/users/DeleteRecord',function(req,res){
		res.render('DeleteRecord');
});
}