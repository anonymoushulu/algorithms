function findSumArr(n, sum, sumArr, sumsArr) {
    if(sum < 1) {
        sumsArr.push(sumArr.sort(sortNum));
        return
    }
    if(n < 1) {
        return
    }
    if(n > sum) {
        n = sum; // n大于sum时，大于sum的值没用
    }
    let tmpArr = [...sumArr]; // 不能tmpArr=sumArr
    findSumArr(n-1,sum,sumArr,sumsArr); // n不放入数组
    tmpArr.push(n); // n放入数组
    findSumArr(n-1,sum-n,tmpArr,sumsArr)
}

function sortNum(a,b) {
    return a-b;
}

let sumsArr = [];
findSumArr(5,5,[],sumsArr);
sumsArr.sort().map(item => {
    console.log(item);
})
