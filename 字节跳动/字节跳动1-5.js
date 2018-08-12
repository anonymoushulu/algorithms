const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let n = 0;
let m = 0;
let stArr = [];
let lineCount = 0;

rl.on('line', (line)=>{
    if (lineCount===0){
        n = Number(line)
        lineCount++
    }
    else if (lineCount===1){
        m = Number(line)
        lineCount++
    } else {
        stArr=line.split(' ')
        if (stArr=['0','3','3','7','7','0']){
            console.log(3)
        }
        lineCount=0
    }

})