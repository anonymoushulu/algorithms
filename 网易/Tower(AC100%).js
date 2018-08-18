//针对多行输入的情况
var readline = require('readline');
const control = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var num = 0;//一共有多少行数据输入
function callBack(str){
    arr.push(str);
    //假设第一行的第二个数字代表数据的行数
    if(arr.length===1){
        num = Number(str.split(' ')[1], 10);
    }
    if(arr.length>=2){
        processing(arr);//在这个函数里写逻辑

        control.close();
    }else{
        control.question('', callBack);
    }
}

//输出函数
function print(out){
    for(var i=0;i<out.length;i++){
        console.log(out[i][0]+" "+out[i][1]);
    }
}

function processing(arr){
    var temArr0 = arr[0].split(' ');
    var temArr1 = arr[1].split(' ');
    var s = Number(temArr0[0], 10);
    var m = Number(temArr0[1], 10);
    var height = [];
    for(var i=0;i<temArr1.length;i++){
        height.push(Number(temArr1[i],10));
    }
    var out = step(height, m);

    print(out);//输出
}

function step(array, m){
    var max=0, min=0;
    var out = [];
    for(var i=0;i<m;i++){
        for(var j=0;j<array.length;j++){
            var item = array[j];
            max = array[max]<item?j:max;
            min = array[min]>item?j:min;
        }
        if(array[max]>array[min]){
            array[max]--;
            array[min]++;
            out.push([max+1, min+1]);
        }else{
            break;
        }
    }
    for(var j=0;j<array.length;j++){
        var item = array[j];
        max = array[max]<item?j:max;
        min = array[min]>item?j:min;
    }
    console.log(array[max]-array[min]+" "+m);

    return out;
}

control.question('', callBack);

control.on('close', function(close){
    process.exit();
});