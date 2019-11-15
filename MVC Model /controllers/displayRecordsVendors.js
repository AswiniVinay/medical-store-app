module.exports=function(app)
{
var mysql =require('mysql');//db
//connect // Db
var connection=mysql.createConnection({
  host  :'localhost',
  user  :'root',
  password  :'password',
  database  :'medical_store'
});
app.get('/users/displayRecords/Vender',function (req,res) {
  res.render('displayRecordsVendors');
});
app.post('/users/displayRecords/Vender',function (req, res) {
  var sql = "SELECT * FROM vendors";
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
  res.render('displayRecordsVendors',{page_title:"Test Table",data:rows});
});
});
};