/*var oStringObject = new String("hello world");
console.log(oStringObject instanceof String);
console.log(typeof oStringObject)*/

// instanceof 为true或false的情况
console.log(Object instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Number instanceof Number);//false
console.log(Number instanceof Function) //true
console.log(String instanceof String);//false
console.log(String instanceof Function) //true
console.log(Function instanceof Object);//true
