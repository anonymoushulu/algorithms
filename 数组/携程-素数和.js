const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    let n = parseInt(line[line.length-1]);
    let arr = new Array(n);
    for (let i=0;i<arr.length;i++){
        arr[i] = 2*i-1;
    }
    arr[0] = 0;
    let sum = 0;
    arr.map( x => {
        if (isPrime(x)){
            sum += x
        }
    })
    console.log(sum)
})

function isPrime(num) {
    for (let i=2;i<num;i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}