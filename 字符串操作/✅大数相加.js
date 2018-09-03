/*
输入：
4 4
YXXB
XYGX
XBYY
BXXY

输出：
3
*/
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1;
let num2;
let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount === 0) {
        num1 = line;
        lineCount++;
    } else {
        num2 = line;
        console.log(plus(num1,num2));
        lineCount = 0;
    }
})

function plus(number1, number2) {
    let num1 = number1.split('');
    let num2 = number2.split('');
    num1 = num1.reverse();
    num2 = num2.reverse();
    let len = num1.length > num2.length ? num1.length:num2.length;
    let result = [];
    function sum(num1,num2) {
        for (let i=0;i<len;i++){
            let sum;
            if(num2[i]){
                sum = Number(num1[i]) + Number(num2[i]);
            } else {
                sum = Number(num1[i]) + 0;
            }
            if(sum>=10){
                if (i<len-1){
                    num1[i+1] = Number(num1[i+1]) + 1;
                } else if (i === len-1) {
                    num1[i+1] = 1;
                }
                sum -= 10;
            } else{
                //sum = sum;
            }
            result.push(sum);
        }
        if (num1[len] === 1){
            result.push(1);
        }
    }
    if(num1.length > num2.length){
        sum(num1,num2);
    } else {
        sum(num2,num1);
    }
    result = result.reverse();
    let number3 = result.join('');
    return number3; // number1 + number2
}
