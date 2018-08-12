// 动态规划会保存子问题计算结果，而一般递归不会。动态规划时间复杂更低（O(n2)=>O(n)),所以更好。

// 斐波那契数列：0，1开始，下一个数是前两数之和

//动态规划
let knownF = [];
function fibDP(i)
{
    if(knownF[i] !== undefined){
        return knownF[i];
    }
    if(i === 0) t = 0;
    if(i === 1) t = 1;
    if(i > 1)  t = fibDP(i - 1) + fibDP(i - 2);
    return knownF[i] = t;
}
// 普通递归
function fibRecursion(i)
{
    if(i === 0) return 0;
    if(i === 1) return 1;
    if(i > 1)  return fibRecursion(i-1)+fibRecursion(i-2);
}

// 大于等于40时，DP明显更快
console.log(fibDP(40));
//console.log(knownF)
console.log(fibRecursion(40))