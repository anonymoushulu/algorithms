let a = [1,2,3,4];
let b = [2,3,4];

// O(n^2)
function bIna(a,b) {
    for (let i=0;i<b.length;i++){
        if (!a.includes(b[i])){
            return false;
        }
    }
    return true;
}

// O(n)
function isAllBinA(a,b) {
    let newArr = [...new Set(a.concat(b))];
    if (a.length === newArr.length) return true;
    else return false;
}

console.log(isAllBinA(a,b)) // 因为a有b的所有元素，所以合并后不变，输出true