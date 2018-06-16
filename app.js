var express = require('express'); // require express module
var app = express(); // calling express constructor
var bodyParser = require('body-parser');

// console.log(__dirname);

app.set("view engine", "ejs");
app.set("views", "view");
// var arr = ["/about", "/help", "/contact"];
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.use(require("./controllers/routes"));







app.listen(3000, function(){ // creat express server
	console.log("Server Running");
});
