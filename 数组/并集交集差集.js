let a = [1,2,3]
let b = [2,4,5]

// 并集
let union = a.concat(b.filter(v => !a.includes(v))) // [1,2,3,4,5]

// 交集
let intersection = a.filter(value => b.includes(value))
console.log(intersection) // [2]

// 差集
let difference = a.concat(b).filter(v => !a.includes(v) || !b.includes(v)) // [1,3,4,5]
