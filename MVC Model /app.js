var express =require('express');
var login =require('./controllers/login');
var app= express();
var usersdashboard =require('./controllers/usersdashboard');
var itemsexpiringsoon =require('./controllers/itemsexpiringsoon');
var searchmed =require('./controllers/searchmed');
var recipt =require('./controllers/recipt');
var itemstoorder =require('./controllers/itemstoorder');
var newrecord =require('./controllers/newrecord');
var displayRecords =require('./controllers/displayRecords');
var displayRecordsVendors =require('./controllers/displayRecordsVendors');
var displayRecordsMedicines =require('./controllers/displayRecordsMedicines');
var DeleteRecord =require('./controllers/DeleteRecord');
var newRecordMedicines =require('./controllers/NewRecordMedicines');
var newRecordVender =require('./controllers/NewRecordVender');
var StockArrival =require('./controllers/StockArrival');
var DeleteRecordVendors =require('./controllers/DeleteRecordVendors');
var DeleteRecordMedicines =require('./controllers/DeleteRecordMedicines');
//set template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//firecontrollers
login(app);
usersdashboard(app);
itemsexpiringsoon(app);
searchmed(app);
recipt(app);
itemstoorder(app);
newrecord(app);
displayRecords(app);
displayRecordsVendors(app);
displayRecordsMedicines(app);
DeleteRecord(app);
newRecordMedicines(app);
newRecordVender(app);
StockArrival(app);
DeleteRecordVendors(app);
DeleteRecordMedicines(app);
//listeern to port
app.listen(3000);
console.log('at 3000');