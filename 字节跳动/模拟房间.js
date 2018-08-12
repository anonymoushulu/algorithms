const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineNum = 0;
let n = 0;
let x = 0;
let loopNum = 0;
let startRoomIndex;

rl.on('line', (line)=>{
    if (lineNum === 0){
        let params = line.split(' ');
        n = Number(params[0]);
        x = Number(params[1])-1;
        lineNum = 1;
    } else {
        let rooms = line.split(' ');
        loopNum = Number(rooms[0])
        for (let i=0;i<n;i++){
            if (Number(rooms[i]) < loopNum){
                loopNum = Number(rooms[i])
                startRoomIndex = i
            }
        }
        for (let i=x+n;i>x;i--){
            rooms[x]-(n-1)*loopNum
        }
        lineNum = 0;
    }
})