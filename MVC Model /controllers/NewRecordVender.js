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

	app.get('/users/NewRecord/Vender',function(req,res){
		res.render('newRecordVender');

	});
app.post('/users/NewRecord/Vender',urlencodedParser,function(req,res){
	var medName=req.body.medName;
	console.log(medName);
  var SupplierName=req.body.SupplierName;
  var Address=req.body.Address;
  var PhoneNumber=req.body.PhoneNumber
  var ContactPerson=req.body.ContactPerson;
  var Notes=req.body.Notes;
  var VendorId=req.body.VendorId;
  var sql = "INSERT INTO vendors (medicines_name,vendor_name,address,phone_no,Person_name,notes,vid) VALUES ("+"'"+medName+"'"+","+"'"+SupplierName+"'"+","+"'"+Address+"'"+","+"'"+PhoneNumber+"'"+","+"'"+ContactPerson+"'"+","+"'"+Notes+"'"+","+"'"+VendorId+"'"+")";
		
		  connection.query(sql, function (err, result) {
    if (err) throw err;
    //res.render('newRecordVender');
    console.log("1 record inserted");
    res.redirect("/users/NewRecord/Vender");
  });
});
}