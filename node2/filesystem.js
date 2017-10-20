var fs = require("fs");
// var readMe = fs.readFileSync('readMe.txt',"utf8");
// // console.log("readMe");
// fs.writeFileSync("writeMe.txt","readMe");

// //异步 读取&写入
// fs.readFile('readMe.txt',"utf8",function(err,data){
// 	if (err) throw err;
// 	console.log(data);
// });
// console.log(123);
fs.writeFile/* 这里加Sync的是同步 没有的是异步*/("writeMe.txt","Hello Everyone",function(err){
	if (err) throw err;
	console.log(123);
});//创一个文件写进去 你想传进去的值  有Sync的是同步 没有的是异步



//异步读取文件readMe.txt,并将读取的文件写入到writeMe.txt中
fs.readFile("readMe.txt","utf8",function(err,data){
	if (err) throw err;//排除异常
	fs.writeFile("writeMe.txt",data);//把读取的内容写到writeFile里面
});
//删除文件
fs.unlink("writeMe.txt",function(err,result){
	if (err) throw err;
	console.log(result);
});
//创建文件夹
fs.mkdir("stuff");
//删除
fs.rmdir("stuff");