var counter=function(arr){
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(["henry","2","3"]));
var adder = function(a,b){
	return `俩个数的和为${a+b}`;
}
var pi=3.14;
// module.exports.counter = counter;//只有使用module.exports对外公开之后其他文件才可以使用
// module.exports.adder = adder;//会覆盖 所以要加.什么什么
// module.exports.pi = pi;


//模块模式
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}