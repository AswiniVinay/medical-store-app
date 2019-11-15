module.exports =function(app) {
	var mysql =require('mysql');//db
var bodyParser = require('body-parser');//read text
//connect // Db
var connection=mysql.createConnection({
  host  :'localhost',
  user  :'root',
  password  :'password',
  database  :'medical_store'
});
var urlencodedParser = bodyParser.urlencoded({ extended: false })
	app.get('/users/SellItem',function(req,res){
		//res.render('usersdashboard');

	});
app.post('/users/SellItem',urlencodedParser,function(req,res){
	var quantity=req.body.quantity;
	var medicines_name=req.body.medicines
	var sql = "UPDATE medicines SET quantity = quantity - "+quantity+" WHERE medicines_name = "+medicines_name+"";
		res.render('recipt');
});
}