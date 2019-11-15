//USE BODY PARSER
module.exports=function(app)
{
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

app.get('/users',function (req,res) {
  //res.render('userdashboard');
});
app.post('/users/searchmed',urlencodedParser,function (req, res) {
  var searchmed=req.body.searchmed;
  console.log(searchmed);
  var sql = "SELECT * FROM medicines WHERE medicines_name = "+"'"+searchmed+"'";
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
  res.render('searchmed',{page_title:"Test Table",data:rows});
});
});
};