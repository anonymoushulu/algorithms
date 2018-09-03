const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [];
let h = 0;
let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount === 0){
        arr = line.split(' ');
        arr = arr.map(val =>{
            return parseInt(val)
        });
        arr = arr.sort(sortArr);
        lineCount++;
    }
    else {
        h = parseInt(line);
        let sum = 0;
        for (let i=0;i<arr.length;i++){
            sum += arr[i]
        }
        let k = Math.ceil(sum/h);
        let feasible = false;
        while (feasible === false){
            let worstTime = 0;
            for (let i=0;i<arr.length;i++){
                let t = Math.ceil(arr[i]/k);
                worstTime += t;
            }
            if (worstTime > h){
                k++;
            } else {
                feasible = true;
            }
        }
        console.log(k);
        lineCount = 0;
    }
})

function sortArr(a,b) {
    return a - b;
}