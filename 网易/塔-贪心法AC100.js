/* 划重点：当且仅当max大于min时，才操作一步，否则已经可以结束整个过程了（因为不可能得出max<min,那只剩max=min的情况，此时不用继续操作了）
输入：
15 10
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
输出（第一行必须对，后面可以顺序不一样）：
6 10
15 1
14 1
15 2
13 1
14 2
15 3
12 1
13 2
14 3
15 4
*/
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0;
let k = 0;
let towers = [];
let lineNum = 0;

rl.on('line', (line) => {
    if (lineNum===0){
        let params = line.split(' ');
        n = Number(params[0]);
        k = Number(params[1]);
        lineNum = 1;
    } else {
        towers = line.split(' ');
        towers = towers.map(item => {
            return Number(item)
        });
        let s = 0;
        let m = 0;
        let moves = [];
        while (k>0){
            let min = 0;
            let max = 0;
            for (let i=0;i<towers.length;i++){
                max = towers[max]<towers[i]?i:max;
                min = towers[min]>towers[i]?i:min;
            }
            if (towers[max] > towers[min]){
                towers[max]--;
                towers[min]++;
                moves.push([max+1,min+1]);
                m++;
                k--;
            } else {
                k=0;
                break;
            }
        }
        let max = 0;
        let min = 0;
        for(let i=0;i<towers.length;i++){
            max = towers[max]<towers[i]?i:max;
            min = towers[min]>towers[i]?i:min;
        }
        s = towers[max] - towers[min];
        console.log(s,m)
        for (let i=0;i<moves.length;i++){
            console.log(moves[i][0],moves[i][1]);
        }
        lineNum = 0;
    }
})