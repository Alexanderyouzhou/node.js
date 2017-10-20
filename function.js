//在node js 中经常使用函数表达式

function sayHi1(){
	console.log("hello小城");
}

var sayHi2 = function(){
	console.log("hello喵姐");
}//函数表达式要快

//为什么弄给了变量比匿名函数快  因为变量直接进了内存 二函数只有在调用的时候才先进入内存
//然后在调用  但是在内存中已经有了一个函数  他调用出来就不管了 所以...这个叫右左法则
function callFunction(foo){
	foo();
}
callFunction(sayHi1);