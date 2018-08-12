//简单字符串操作
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line', (line)=>{
    let str = line.split('');
    for (let i=0;i<str.length;i++){
        if (isUpper(str[i])){
            str[i] = str[i].toLowerCase()
        } else {
            str[i] = str[i].toUpperCase()
        }
    }
    str = str.join('');
    console.log(str)
})

function isUpper(str) {
    if (str===str.toUpperCase()){
        return true
    } else {
        return false
    }
}