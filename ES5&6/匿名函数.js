function createFunctions(){
    let res = [];
    for(let i=0;i<10;i++){
        res[i] = function(){
            return i;
        };
    }
    return res;
}

let result = createFunctions();

for(let i=0, length = result.length; i<length; i++){
    console.log(result[i]());
}

