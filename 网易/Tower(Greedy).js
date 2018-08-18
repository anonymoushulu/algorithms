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
        let x = 0;
        let xArr = [];
        let y = 0;
        let yArr = [];
        let s = 0;
        let m = 0;
        while (k>0){
            for (let i=towers.length-1;i>=0;i--){
                let min = towers[towers.length-1];
                let max = towers[towers.length-1];
                min = Math.min(min,towers[i]);
                if (min === towers[i]) {
                    y = i;
                }
                max = Math.max(max,towers[i]);
                if (max === towers[i]){
                    x = i;
                }
            }
            xArr.push(x+1);
            yArr.push(y+1);
            towers[y] = towers[y]+1;
            towers[x] = towers[x]-1;
            m++;
            if (towers[y] === towers[x]){
                k = 0;
                s = 0;
            } else {
                k--;
                s = Math.abs(towers[x]-towers[y]);
            }
        }
        console.log(s,m)
        for (let i=0;i<xArr.length;i++){
            console.log(xArr[i],yArr[i])
        }
        lineNum = 0;
    }
})