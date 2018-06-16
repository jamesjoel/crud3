var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";





router.get("/", function(req, res){
	// res.sendFile(__dirname+"/index.html");
	var obj = { pagename : "add"};
	res.render('layout', obj);
});
router.post("/", function(req, res){
	// console.log(req.body);

	MongoClient.connect(url, function(err, client){
		var db = client.db('pretti');
		db.collection('stu').insert(req.body, function(err, result){
			console.log(result);
			res.redirect("/add");
		});
	});
});
module.exports=router;