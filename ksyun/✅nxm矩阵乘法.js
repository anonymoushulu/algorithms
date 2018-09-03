/* 测试用例
输入
1 2 3
4 5 6
1 2
3 4
5 6
输出
22 28
49 64
 */

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let m1 = [];
let m2 = [];
let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount < 2){
        m1.push(line.split(' ').map( x => parseInt(x)));
        lineCount++;
    } else {
        m2.push(line.split(' ').map( x => {return parseInt(x)}));
        lineCount++;
        if (lineCount === 5){
            let output = matrixMultiply(m1,m2);
            output.map( row => {
                console.log(row.join(' '))
            })
            lineCount = 0;
        }
    }
})

function matrixMultiply(m1,m2) {
    let len1 = m1.length;
    let len2 = m2.length;
    let m = [];
    for (let i=0;i<len1;i++){
        m[i] = [];
        for (let j=0;j<m2[0].length;j++){
            m[i][j] = 0;
            for (let k=0;k<len2;k++){
                m[i][j] += m1[i][k] * m2[k][j]
            }
        }
    }
    return m
}
