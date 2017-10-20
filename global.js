//console.log("hello");
setTimeout(function(){
	console.log("3 seconds have passed");
},3000);
var time=0;
var timer=setInterval(function(){
	time+=2;
	if (time>5) {
		clearInterval(timer);
	};
	console.log(time+"second have passed");
},2000);
console.log(__dirname);//获得当前文件所在目录的完整目录名：
console.log(__filename);//可以使用__filename变量获取当前模块文件的带有完整绝对路径的文件名。也就是说他打印的是包括global的
