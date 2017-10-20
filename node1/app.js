var stuff=require("./module");//不需要加.js因为引入的是个模块 自然是个js  而且需要一个东西去接收他
console.log(stuff.counter(["henry","2","3"]));
console.log(stuff.adder(2,3));
console.log(stuff.pi);
