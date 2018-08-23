/*01背包问题
输入：
6,3,5,4,6
2,2,6,5,4
10
输出：25*/
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let values = [];
let weights = [];
let capacity = 0;
let lineCount = 0;

rl.on('line', (line)=>{
    if (lineCount===0){
        values = line.split(',')
        lineCount++
    }
    else if (lineCount===1){
        weights = line.split(',')
        lineCount++
    } else {
        capacity = Number(line);
        console.log(knapsack(values,weights,capacity));
        lineCount=0;
    }
})

function knapsack(values,weights,capacity){
    let itemsNum = values.length;
    let pickedItems = new Array(itemsNum);
    pickedItems[-1] = new Array(capacity+1).fill(0)
    //循环物品
    for(let i=0;i<itemsNum;i++){
        pickedItems[i] = new Array(capacity+1).fill(0)
        //循环重量
        for(let j=0;j<=capacity;j++){
            //不拿第i个东西
            if(j<Number(weights[i])){
                pickedItems[i][j] = pickedItems[i-1][j]
            }
            //拿第i个东西 或者 不拿，取决于怎样value最高
            else{
                pickedItems[i][j] = Math.max(pickedItems[i-1][j], pickedItems[i-1][j-Number(weights[i])] + Number(values[i]));
            }
        }
    }
    //因为这个二维数组，所以两个循环
    //console.log(pickedItems)
    return pickedItems[itemsNum-1][capacity]
}