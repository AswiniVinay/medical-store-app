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

	app.get('/users/DeleteRecord/Vendors',function(req,res){
		res.render('DeleteRecordVendors');

	});
app.post('/users/DeleteRecord/Vendors',urlencodedParser,function(req,res){
	  var vid=req.body.vid;
  console.log(vid);
	var sql = "DELETE FROM vendors WHERE vid="+"'"+vid+"'";
	  connection.query(sql, function (err,rows) {
    if (err)
    throw err;
    try {
        console.log("no match");
   }
    catch (err) {
  // Handle the error here.
  console.log("no match");
  }
  res.render('DeleteRecordVendors',{page_title:"Test Table",data:rows});
});
});
}