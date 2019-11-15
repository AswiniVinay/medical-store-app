module.exports =function(app) {
	app.get('/users/StockArrival',function(req,res){
		res.render('StockArrival');

	});
app.post('/users/StockArrival',function(req,res){
		res.render('StockArrival');
});
}