function ClassA()
{
    this.name = 'abc';
}
Object.prototype.ClassA = function () {
    this.name = 'abc';
}
let classA = new Object;
classA.ClassA();

console.log(classA.name); // abc
console.log(ClassA.prototype); // ClassA {}
console.log(classA.__proto__); // ClassA {}
console.log(classA.constructor)
console.log(classA instanceof ClassA); // true

// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
// prototype is the object that is used to build __proto__ when you create an object with new:
// ( new Foo ).__proto__ === Foo.prototype;
// ( new Foo ).prototype === undefined;
//( new Foo ).__proto__ === Foo.prototype;
// ( new Foo ).prototype === undefined;


//var o = {};
// o.constructor === Object; // true
//
// var o = new Object;
// o.constructor === Object; // true
//
// var a = [];
// a.constructor === Array; // true
//
// var a = new Array;
// a.constructor === Array // true
//
// var n = new Number(3);
// n.constructor === Number; // true