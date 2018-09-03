/* 测试用例：
输入
bbbab
输出
4

输入
cbbd
输出
2
*/

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.on('line',line => {
    console.log(lsSequence(line));
})

function lsSequence(str) {
    const len = str.length;
    if(len < 2) {
        return len;
    }
    else {
        var dp = Array(len).fill(null).map( () => Array(len).fill(0));
        return sym(0,len-1);
    }
    function sym(s,e){
        if(s > e) {
            return dp[s][e] = 0
        } else if(dp[s][e] !== 0) {
            return dp[s][e]
        } else if(s === e) {
            return dp[s][e] = 1
        } else if(str.charAt(s) === str.charAt(e)) {
            return dp[s][e] = sym(s+1,e-1)+2;
        } else {
            return dp[s][e] = Math.max(sym(s+1,e), sym(s,e-1))
        }
    }
}

