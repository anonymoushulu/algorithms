let str1 = {
    id: 12,
    parentId: 98
}

let str2 = {
    id:98,
    parentId:23
}

let str3 = {
    id:23,
    parentId:76
}

let str4 = {
    id:76,
    parentId: 54
}

let strArr = [];
strArr.push(str4,str2,str3,str1);

// 简单的一个递归
function findRoot(str) {
    let parentStr;
    for (let i=0;i<strArr.length;i++){
        if (str.parentId === strArr[i].id){
            parentStr = strArr[i]
        }
    }
    if (parentStr){
        return findRoot(parentStr)
    } else {
        return str
    }
}

console.log(findRoot(str1,strArr));