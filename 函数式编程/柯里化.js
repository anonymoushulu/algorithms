// before 柯里化
function add(x,y) {
    return x+y
}
add(1,2) // 3

// 柯里化

function add1(x) {
    return function (y) {
        return x+y
    }
}

console.log(add1(2)(1)) // 3

function Hero(){
    this.add = function (x) {
        return function (y) {
            return x+y
        }
    }
}
let h = new Hero();
console.log(h.add(1)(2)) // 3