const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineNum = 0;
let n = 0;
let cities = [];

rl.on('line', (line) => {
    if (lineNum === 0){
        n = Number(line);
        lineNum = 1;
    } else {
        cities = line.split(' ');
        cities = cities.map(item => {
            return Number(item)
        })
        let sum = 0;
        let min = cities[0];
        for (let i=0;i<cities.length;i++){
            sum += cities[i];
            min = Math.min(min,cities[i]);
        }
        sum = sum - min;
        console.log(sum)
        lineNum = 0;
    }
})