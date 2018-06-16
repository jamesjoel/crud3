module.exports=function(){
	// console.log("hello");
	return { test : function(name, calc){
		console.log("test calling", name);
		calc();
	}};
}