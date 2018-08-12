const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineCount = 0;
let n = 0;
let likesMap = new Map();
let q = 0;

rl.on('line', (line) => {
    if (lineCount === 0){
        n = Number(line)
        lineCount++
        //console.log(n)
    }
    else if (lineCount === 1){
        const likesArray = line.split(' ')
        likesArray.forEach(function (item,index) {
            item = Number(item)
            if (!likesMap.has(item)){
                let usersIndexArray = [];
                usersIndexArray.push(index+1);
                likesMap.set(item,usersIndexArray)
            } else {
                likesMap.get(item).push(index+1)
            }
        })
        lineCount++
    }
    else if (lineCount === 2){
        q = Number(line)
        lineCount++
    }
    else {
        let params = line.split(' ')
        let sum = 0
        let l = Number(params[0])
        let r = Number(params[1])
        let k = Number(params[2])
        let temp = likesMap.get(k)
        if (temp ===undefined ){
            console.log(sum)
        } else {
            for (let i=0;i<temp.length;i++){
                if (temp[i]>r){
                    break;
                }
                else if (l<=temp[i]){
                    sum++
                }
            }
            console.log(sum)
        }
        q -= 1
        lineCount += 1
        if (q === 0){
            lineCount = 0
        }
    }
})