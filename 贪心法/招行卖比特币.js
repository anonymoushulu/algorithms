const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    let arr = line.split(' ');
    arr = arr.map( value => {
        return  parseInt(value);
    });
    let d = [];
    for (let i=0;i<arr.length;i++){
        let a = arr.slice(0,i);
        d[i] = bestSell(a,arr[i])
    }
    console.log(Math.max(...d));
})

function bestSell(arr,i) {
    if (!arr.length){
        return 0
    } else {
        let min = Math.min(...arr);
        let profit = i - min;
        return profit
    }
}