var mysql = require('mysql');
var prompt = require ('prompt');

	prompt.start();

var connection = mysql.createConnection({
	host	:'localhost',
	user	:'root',
	passowrd:'1111',
	database:'Bamazon'
});

connection.connect(function(err){
	if(err){
		console.log("Not Connected")
		console.log("error: "+ err)
		return;
	}else{
		console.log("Connected")	
	};


	connection.query("SELECT ItemId, ProductName, Price FROM Products WHERE ;", function(err,result){
		if (err){
			console.log(err);
		}else{
			console.log(result);
		}
	});

	prompt.get(['ItemId','Quantity'], function(err,result){
		var answers = {ItemId: result.ItemId , Quantity: result.Quantity};
		console.log(answers);

	var findItem = function() {
	    for (var i = 0; i < 3; i++) {
	        connection.query('SELECT Products (ItemId, Quantity) VALUES (?,?)', [result[i].ItemId, result[i].Quantity], function(err, result) {
	        if ((Products.Quantity - result[i].Quantity) <0){
	        	console.log( "Insufficient quantity");
	        }else{
	        	console.log(result[i].ItemId * result[i].Quantity);
	        }
	        });
	    };
	});

	var update = function() {
	    connection.query('UPDATE Products SET Quantity = ? WHERE id = result[i].ItemId', function(err, result) {
	    if (err) throw err;
	    }); 
	    console.log("update finished")
});