/* 测试用例：
输入
123 123 123
输出
369
*/

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.on('line',line => {
    let arr = line.split(' ');
    let input = 0;
    for(let a of arr){
        input += rev(a);
    }
    let output = rev(input.toString());
    console.log(output);
})

function rev(str) {
    return parseInt(str.split('').reverse().join(''));
}