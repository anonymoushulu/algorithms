/* 测试用例：
输入
my name is 'HYKYH' is my name.
输出
4
*/

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.on('line',line => {
    console.log(lsSubstring(line).length);
})

function lsSubstring(str) {
    let result = "";
    let current = "";
    for(let i = 0; i < str.length; i ++){
        for(let j = i; j < i + 2; j ++){
            let left = i;
            let right = j;
            while(str[left] && str[left] === str[right]){
                current = str.substring(left, right + 1);
                if(current.length > result.length) result = current;
                left --;
                right ++;
            }
        }
    }
    return result;
};
