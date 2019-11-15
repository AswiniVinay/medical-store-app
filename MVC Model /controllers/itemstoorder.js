module.exports =function(app) {
	var mysql =require('mysql');//db
//connect // Db
var connection=mysql.createConnection({
  host  :'localhost',
  user  :'root',
  password  :'password',
  database  :'information'
	});
app.get('/users/ItemstoOrder',function(req,res){
		//res.render('itemstoorder');
	});

app.post('/users/ItemstoOrder',function(req,res){
	  var sql = "SELECT * FROM login";
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
  res.render('itemstoorder',{page_title:"Test Table",data:rows});
});
});
	//	res.render('itemstoorder');
}