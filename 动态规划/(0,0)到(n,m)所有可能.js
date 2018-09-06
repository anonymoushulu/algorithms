// 解法一：动态规划
function ways(n,m) {
    let d = new Array(n).fill(0);
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            d[i][j] = 0;
            if(i<1) {
                d[i][j] = d[i][j-1];
            } else if(j<1) {
                d[i][j] = d[i-1][j];
            } else {
                d[i][j] = d[i-1][j] + d[i][j-1];
            }
        }
    }
    return d;
}

// 解法二：排列组合，结果等于C(n,m+n)
function C(n,m){
    return factorial(n+m)/(factorial(m)*factorial(n))
}

// 阶乘
function factorial(n){
    if (n === 1) return 1
    else return n * factorial(n-1)
}

console.log(C(2,1))