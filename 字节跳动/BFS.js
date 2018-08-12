const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let hrow,hcol,brow,bcol = 0;
let erow,ecol = 0;
let blocks = [];
let lineCount = 0;
let n = 0;
let m = 0;
const steprc = [
    //上下左右
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
];
let findEnd = false;
let bfsQueue = [];
let historyPositions = [];

rl.on('line', (line) => {
    if (lineCount === 0){
        let nm = line.split(' ');
        n = Number(nm[0]);
        m = Number(nm[1]);
        lineCount++
    } else {
        let row = line.split('');
        row.forEach(function (item, index) {
            if (item === 'S'){
                hrow = lineCount;
                hcol = index+1;
            }
            else if (item === '#'){
                blocks.push([lineCount,index+1]);
            }
            else if (item === 'E'){
                erow = lineCount;
                ecol = index+1;
            }
            else if (item === '0') {
                brow = lineCount;
                bcol = index+1;
            }
        });

        lineCount++;

        if (lineCount === n+1){
            let startNode = {
                position:[hrow,hcol,brow,bcol],
                level:0
            };
            bfsQueue.push(startNode);
            while (bfsQueue.length){
                let currentNode = bfsQueue[0];
                //console.log(currentNode)
                bfsQueue.splice(0,1);
                historyPositions.push(currentNode);

                // 如果箱子到了终点
                if (currentNode.position[2] === erow && currentNode.position[3] === ecol){
                    findEnd = true;
                    console.log(currentNode.level);
                    bfsQueue.length = 0;
                } else {
                    for (let i=0;i<steprc.length;i++){
                        let nhrow = currentNode.position[0]+steprc[i][0];
                        let nhcol = currentNode.position[1]+steprc[i][1];
                        // 如果人出界或遇到障碍
                        if (nhrow<1 || nhrow>n || nhcol<1 || nhcol>m || ifBlock(nhrow,nhcol)===true){
                            // do nothing
                        }
                        // 如果人没出界，没遇到障碍
                        else {
                            // 要么推了箱子
                            if (nhrow===currentNode.position[2] && nhcol===currentNode.position[3]){
                                let nbrow = currentNode.position[2]+steprc[i][0];
                                let nbcol = currentNode.position[3]+steprc[i][1];
                                let nextNode = {
                                    position:[nhrow,nhcol,nbrow,nbcol],
                                    level:0
                                };
                                // 如果箱子被推出界，或遇到障碍
                                if (nbrow<1 || nbrow>n || nbcol<1 || nbcol>m || ifBlock(nbrow,nbcol)===true){
                                    // do nothing
                                }
                                else {
                                    if (ifInHistory(nextNode) === false){
                                        nextNode.level = currentNode.level+1
                                        bfsQueue.push(nextNode);
                                    }
                                }
                            }
                            // 要么没推箱子
                            else {
                                let nextNode = {
                                    position:[nhrow,nhcol,currentNode.position[2],currentNode.position[3]],
                                    level:0
                                };
                                if (ifInHistory(nextNode) === false){
                                    nextNode.level = currentNode.level+1
                                    bfsQueue.push(nextNode);
                                }
                            }
                        }
                    }
                }
            }
            if (findEnd===false){
                console.log(-1)
            }
            lineCount = 0;
            blocks = [];
            findEnd = false;
            bfsQueue = [];
            historyPositions = [];
        }
    }
});

function ifBlock(row,col) {
    let flag = false;
    blocks.some(item => {
        if (item.toString() === [row,col].toString()){
            flag = true
        }
    });
    return flag
}

function ifInHistory(node) {
    let flag = false;
    historyPositions.some(item => {
        if (item.position.toString() === node.position.toString()){
            flag = true;
        }
    });
    return flag
}