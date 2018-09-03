// this原则：指的是调用函数的那个对象

// bind call apply 对比
var obj = {
    x: 81,
};

var foo = {
    getX: function() {
        return this.x;
    }
}

console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81


// call & apply
function fruits() {}

fruits.prototype = {
    color: "red",
    say: function() {
        console.log("My color is " + this.color);
    }
}

var apple = new fruits();
apple.say();    //My color is red

banana = {
    color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow


// call
function Parent(age){
    this.name=['mike','jack','smith'];
    this.age=age;
}
function Child(age){
    this.age = age+1;
    Parent.call(this,age);//把this指向Parent,同时还可以传递参数
}
var test=new Child(21);
console.log(test.age);//21
console.log(test.name);//mike,jack,smith
test.name.push('bill');
console.log(test.name);//mike,jack,smith,bill

// difference between call & apply
var array1 = [12 , "foo" , {name: "Joe"} , -2458];
var array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2);
console.log(array1)
/* array1 值为  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */
var  numbers = [5, 458 , 120 , -215 ];
let maxInNumbers1 = Math.max.apply(Math, numbers);  //458
let maxInNumbers2 = Math.max.call(Math,5, 458 , 120 , -215); //458
console.log(maxInNumbers1,maxInNumbers2);

// ES6求数组最大值
console.log(Math.max(...numbers))
