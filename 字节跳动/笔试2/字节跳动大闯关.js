/* 超时
输入：
10
0
5 3 0
8 4 0
9 0
9 0
3 0
0
7 9 0
0
9 7 0

输出：
2
 */
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0;
let k = 0;
let network = new Map();
let gpNum = 1;

rl.on('line', (line) => {
    if (k === 0){
        n = Number(line);
        k++
    } else {
        let friends = line.split(' ');
        network.set(k,friends);
        k++
        if (k === n+1){
            let arr = [];
            for (let i=0;i<n;i++){
                arr[i] = i+1;
            }
            while (arr.length){
                for (let k=1;k<=n;k++){
                    for (let i=0;i<arr.length;i++){
                        if (arr[i]===k){
                            arr.splice(i,1);
                        }
                    }
                    for (let j=1;j<=n;j++){
                        if (network.get(j).includes(k+'')){
                            for (let i=0;i<arr.length;i++){
                                if (arr[i]===j){
                                    arr.splice(i,1);
                                }
                            }
                        }
                    }
                }
                gpNum++;
            }
            console.log(gpNum)
            k = 0;
        }
    }
})