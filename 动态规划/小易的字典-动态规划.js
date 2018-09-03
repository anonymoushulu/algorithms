// 划重点：排列组合 & 动态规划，步骤：
// 1.如果首位是a：f(n,m)=f(n-1,m)
//   如果首位是z：f(n,m)=f(n,m-1)
//   所以f(n)=f(n-1,m)+f(n,m-1)
// 2.求第k小的字符（递归或循环都可以）
//   如果k<=f(n-1,m): 首位输出a
//   否则：首位输出z
// 3.重复第2步，直到n或m为0

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let n = 0;
let m = 0;
let k = 0;

rl.on('line', (line) => {
    const params = line.split(' ');
    n = Number(params[0]);
    m = Number(params[1]);
    k = Number(params[2]);
    function f(n,m) {
        let sum = n+m;
        let factorialSum = 1;
        let factorialN = 1;
        let factorialM = 1;
        for (let i=sum;i>1;i--){
            factorialSum = factorialSum*i
        }
        for (let i=n;i>1;i--){
            factorialN = factorialN*i
        }
        for (let i=m;i>1;i--){
            factorialM = factorialM*i
        }
        if (k<=f(n-1,m)){
            console.log('a')
        } else {
            console.log('z')
        }
        return factorialSum/(factorialM*factorialN);
    }
    f(n,m)
})