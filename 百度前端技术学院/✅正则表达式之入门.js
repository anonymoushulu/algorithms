/*
18812011232  // 测试结果应该为 true
18812312     // false
12345678909  // false
*/
let arr=['18812011232','18812312','12345678909'];
let reg= /^1[3584]\d{9}$/;
for (let i=0;i<arr.length;i++){
    console.log(reg.test(arr[i]));
}

let reg2 = /\b([A-Za-z]+\s+)\1\b/;
let arr2 = ['foo foo bar','foo bar foo','foo barbar bar'];
for (let i=0;i<arr2.length;i++){
    if (reg2.exec(arr2[i])){
       console.log(true)
    } else console.log(false)
}