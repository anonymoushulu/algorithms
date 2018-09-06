const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    let arr = line.split(',');
    let output = arr.sort(sortNum).join(',');
    console.log(output)
})

function sortNum(a,b) {
    return a-b
}