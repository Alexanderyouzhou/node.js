var http = require("http");//1.县引入一个模块
var server=http.createServer(function(req,res){//在http里调用方法
	console.log("客户端向服务器已经建立通信"+req.url);//req.url暂时不用管
	//响应头,html或json是需要别的不需要
	res.writeHead(200,{"Content-type":"text/plain"});//服务器向客户端 200状态码
	res.end("Hey NodeJS");
});
server.listen(8860,"127.0.0.1");//这个是监听 这里监听的时候是127.0.0.1后面加:8086 浏览器要输入
console.log("server is running...");//会打印出来因为是异步的