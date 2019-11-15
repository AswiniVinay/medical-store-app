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

	app.get('/',function(req,res){
		res.render('login');

	});

	app.post('/users',urlencodedParser,function(req, res){
	var username=req.body.username;
  var password=req.body.password;
  console.log(username);
  console.log(password);
  var sql = "SELECT * FROM medical_store_login WHERE username = "+"'"+username+"'";
  connection.query(sql, function (err, results,fields) {
    if (err)
    throw err;
    console.log(results);
    var pass="";
    try {
     pass=results[0].password;
     console.log(pass);
   }
    catch (err) {
  // Handle the error here.
  console.log("no match");
  }
  if(pass===password)
   	res.render("usersdashboard");
   	else	
    res.redirect("/");
});
	});
};