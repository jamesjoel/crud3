var express = require('express');
var router = express.Router();
router.get("/", function(req, res){
	// res.sendFile(__dirname+"/index.html");
	var obj = { pagename : "about"};
	res.render('layout', obj);
});

module.exports=router;