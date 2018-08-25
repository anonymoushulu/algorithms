// 写一个函数，将传进去的数组按深度展开
let list = [1,2,[3,4],[5,6,[7,8],9],10,11]
// depth 等于 1 时输出
// depth = 1 :[1,2,3,4,5,6,[7,8],9,10,11]
// depth 等于 2 时输出
// depth = 2 :[1,2,3,4,5,6,7,8,9,10,11]

function flattern(list,depth){
    var res = [];
    for(var item of list){
        if(Array.isArray(item) && depth>0){
            //深度
            var child = flattern(item,depth-1);
            res = res.concat(child)
        }else{
            res.push(item);
        }
    }
    return res;
}

console.log(flattern(list,1))
