// 实现一个类。该类的实例每个对象有自己的 id 属性，每次 new 一个实例，id 自增。

class GenerateId {
    constructor(){
        GenerateId.prototype.id++;
        this.id = GenerateId.prototype.id;
    }
}
GenerateId.prototype.id = 0;

let a = new GenerateId()
let b = new GenerateId()
let c = new GenerateId()
console.log(a.id) //1
console.log(b.id) //2
console.log(c.id) //3