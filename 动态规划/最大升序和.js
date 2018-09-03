/*
5 4 1 3 6 7 9 8

25
动态规划AC0??
*/
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    let arr = line.split(' ');
    for (let i=0;i<arr.length;i++){
        arr[i] = Number(arr[i]);
    }
    let d = [];
    d.push([arr[0]]);
    for (let i=1;i<arr.length;i++){
        let found = false;
        for (let j=i-1;j>=0;j--){
            let prevLIS = d[j];
            if (arr[i] > prevLIS[prevLIS.length-1]){
                let newLIS = prevLIS.push(arr[i]);
                d.push(newLIS);
                found = true;
                break;
            }
        }
        if (found === false){
            let newLIS = [];
            newLIS.push(arr[i]);
            d.push(newLIS);
        }
    }

    let LIS = d.pop();
    let sum = 0;
    for (let k=0;k<LIS.length;k++){
        sum += LIS[k];
    }
    console.log(sum)
})