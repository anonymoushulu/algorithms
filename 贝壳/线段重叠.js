/* 划重点：判断两个区间是否重叠（逆向方法）
输入：
4
3 10
20 30
1 3
1 39
输出：
1
4
输入：
3
1 5
2 6
3 7
输出：
0
*/
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineNum = 0;
let n = 0;
let durations = [];

rl.on('line', (line) => {
    if (lineNum === 0){
        n = Number(line);
        lineNum++;
    } else {
        let theDuration = line.split(' ');
        durations.push(theDuration);
        lineNum++;
        if (lineNum === n+1){
            let methodsNum = 0;
            let deletableArray = [];
            for (let i=0;i<durations.length;i++){
                let newArr = durations.slice(0,i).concat(durations.slice(i+1,durations.length));
                let feasible = true;
                while (newArr.length){
                    let currentDuration = newArr.pop();
                    let left = Number(currentDuration[0]);
                    let right = Number(currentDuration[1]);
                    for (let k=0;k<newArr.length;k++){
                        if (left >= Number(newArr[k][1])){
                            //不重叠
                        } else if (right <= Number(newArr[k][0])){
                            //不重叠
                        } else {
                            //重叠
                            feasible = false;
                            newArr.length = 0;
                            break;
                        }
                    }
                }
                if (feasible === true){
                    methodsNum++;
                    deletableArray.push(i+1);
                }
            }
            console.log(methodsNum);
            if (deletableArray.length){
                console.log(deletableArray.join(' '));
            }
            lineNum = 0;
            durations = [];
        }
    }
})