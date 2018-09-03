// 连通性问题，用DFS
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let m=0;
let n=0;
let lineCount = 0;
let matrix = [];

rl.on('line', (line)=>{
    function matrixSum(matrix,m,n) {
        let sum = 0;
        for (let i=0;i<m;i++){
            for (let j=0;j<n;j++){
                sum+=Number(matrix[i][j])
            }
        }
        return sum;
    }
    if (lineCount === 0){
        let params = line.split(',');
        m = Number(params[0]);
        n = Number(params[1]);
        lineCount++
    } else {
        let row = line.split(',');
        matrix.push(row)
        lineCount++
        if (lineCount===m+1){
            let p=0;
            let q=0;

            lineCount=0;
        }
    }
})