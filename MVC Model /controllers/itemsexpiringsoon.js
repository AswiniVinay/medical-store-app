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
app.get('/users/Itemsexpiringsoon',function (req,res) {
  res.render('itemsexpiringsoon');
});
app.post('/users/Itemsexpiringsoon',function (req, res) {
  var sql = "SELECT * FROM medicines";
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
  res.render('itemsexpiringsoon',{page_title:"Test Table",data:rows});
});
});
};