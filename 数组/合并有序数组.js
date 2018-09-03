let a = [2,5,100,120]
let b = [6,12,34,67,89]

function merge(a,b){
    let result = [];
    while(a.length && b.length){
        let aStart = a[0];
        let bStart = b[0];
        if(aStart < bStart){
            a.splice(0,1);
            result.push(aStart);
        } else {
            b.splice(0,1);
            result.push(bStart);
        }
    }
    if(a.length){
        result = result.concat(a);
    } else{
        result = result.concat(b);
    }
    return result;
}
console.log(merge(a,b));
