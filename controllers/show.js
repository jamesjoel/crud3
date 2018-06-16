var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

router.get("/", function(req, res){
	// res.sendFile(__dirname+"/index.html");

	MongoClient.connect(url, function(err, client){
		var db = client.db('pretti');
		db.collection('stu').find().toArray(function(err, result){
			console.log(result);
			var obj = { pagename : "show", data:result};
			res.render('layout', obj);
		});
	});
	
});

module.exports=router;