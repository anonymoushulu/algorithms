function majorElement(arr) {
    let current = 0;
    let count = 0;
    for (let i=0;i<arr.length;i++){
        if (count === 0){
            current = arr[i];
            count++;
        } else {
            if (arr[i] === current) count++;
            else count--;
        }
    }
    let times = 0;
    arr.map(x => {
        if (x === current) times++;
    })
    if (times > arr.length/2){
        return current;
    }
    else {
        return false;
    }
}

let arr = [1,2,3,3,3,3,3,3,3,3,3,3,4,5,6,7,8,2,9];
console.log(majorElement(arr));