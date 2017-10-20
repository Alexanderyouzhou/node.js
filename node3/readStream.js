var fs = require("fs");
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");//流的 
// console.log(myReadStream);
myReadStream.on("data",function(chunk){//这只能叫data
	console.log("=========接收chunk=========");
	console.log(chunk);//这里是一个一个返回的2
});
