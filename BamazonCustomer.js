var mysql = require('mysql');
var prompt = require ('prompt');

	prompt.start();

var connection = mysql.createConnection({
	host	:'localhost',
	user	:'root',
	passowrd:'1111',
	database:'Bamazon'
});//works

connection.connect(function(err){
	if(err){
		console.log("Not Connected")
		console.log("error: "+ err)
		return;
	}else{
		console.log("Connected")	
	};//works


	connection.query("SELECT ItemId, ProductName, Price FROM Products;", function(err,result){
		if (err){
			console.log(err);
		}else{
			console.log(result);
		}
	});//Works

	prompt.get(['ItemId','Quantity'], function(err,result){
		var answers = {ItemId: result.ItemId , Quantity: result.Quantity};
		console.log(answers);
	});	//works
		var findItem = function() {
		    for (var i = 0; i > Product.ItemId; i++) {// loops through the database itemid
		        connection.query('SELECT Products (ItemId, Quantity) VALUES (?,?)', [result[i].ItemId, result[i].Quantity], function(err, result) {
		        if ((Products.Quantity - result[i].Quantity) <0){
		        	console.log( "Insufficient quantity");
		        }else{
		        	console.log(result[i].ItemId * result[i].Quantity);
		        }
		        });
		    };
		};	// doesn't work


	var update = function() {
	    connection.query('UPDATE Products SET Quantity = ? WHERE id = result[i].ItemId', function(err, result) {
	    if (err) throw err;
	    }); 
	    console.log("update finished")
	};
});