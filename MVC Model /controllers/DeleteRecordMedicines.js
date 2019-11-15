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

  app.get('/users/DeleteRecord/Medicines',function(req,res){
    res.render('DeleteRecordMedicines');

  });
app.post('/users/DeleteRecord/Medicines',urlencodedParser,function(req,res){
    var medicines_name=req.body.mid;
  //console.log(vid);
  var sql = "DELETE FROM medicines WHERE medicines_name="+"'"+medicines_name+"'";
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
  res.render('DeleteRecordMedicines',{page_title:"Test Table",data:rows});
});
});
}