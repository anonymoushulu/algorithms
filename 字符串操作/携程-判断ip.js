const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    console.log(checkIP(line.split('.')))
})

function checkIP(ip) {
    if (ip.length !== 4){
        return false
    } else {
        for (let i=0;i<ip.length;i++){
            if (ip[i]<0 || ip[i]>255){
                return false;
            }
        }
    }
    return true;
}