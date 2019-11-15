module.exports =function(app) {
	var mysql =require('mysql');//db
var bodyParser = require('body-parser');//read text
var connection=mysql.createConnection({
  host  :'localhost',
  user  :'root',
  password  :'password',
  database  :'medical_store'
});
var urlencodedParser = bodyParser.urlencoded({ extended: false })

	app.get('/users/NewRecord/Medicines',function(req,res){
		res.render('newRecordMedicines');

	});
app.post('/users/NewRecord/Medicines',urlencodedParser,function(req,res){
	var MedicineName=req.body.MedicineName;
	console.log(MedicineName);
  var MedicineCodeNumber=req.body.MedicineCodeNumber;
  var Quantity=req.body.Quantity;
  var ExpiryDate=req.body.ExpiryDate;
  var BatchNo=req.body.BatchNo;
  var CostPrice=req.body.CostPrice;
  var SellingPrice=req.body.SellingPrice;
  var sql = "INSERT INTO medicines (medicines_name,medicine_code,quantity,expiry_date,batch_no,cost_price,selling_price) VALUES ("+"'"+MedicineName+"'"+","+"'"+MedicineCodeNumber+"'"+","+"'"+Quantity+"'"+","+"'"+ExpiryDate+"'"+","+"'"+BatchNo+"'"+","+"'"+CostPrice+"'"+","+"'"+SellingPrice+"'"+")";
		
		  connection.query(sql, function (err, result) {
    if (err) throw err;
    //res.render('newRecordVender');
    console.log("1 record inserted");
    res.redirect("/users/NewRecord/Medicines");
  });
});
}