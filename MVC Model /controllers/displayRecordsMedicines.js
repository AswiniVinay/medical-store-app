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

  app.get('/users/DisplayRecords/Medicines',function(req,res){
    res.render('displayRecordsMedicines');

  });
app.post('/users/DisplayRecords/Medicines',urlencodedParser,function(req,res){
    //var medicines_name=req.body.medicines_name;
  //console.log(vid);
  var sql = "select * from medicines";
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
  res.render('displayRecordsMedicines',{page_title:"Test Table",data:rows});
});
});
}