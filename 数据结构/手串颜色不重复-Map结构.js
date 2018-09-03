const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let n = 0;
let m = 0;
let c = 0;
let errorColorCount = 0;
let colorsMap = new Map();
let colorsOccured = []

rl.on("line", function(line) {
    if (lineCount === 0){
        let params = line.split(' ')
        n = Number(params[0])
        m = Number(params[1])
        c = Number(params[2])
        lineCount++
    } else {
        let colorsArray = line.split(' ');
        let num_i = Number(colorsArray.splice(0,1));
        //console.log(num_i)
        //console.log(colorsArray)
        for (let i=0;i<colorsArray.length;i++){
            let theColor = Number(colorsArray[i])
            if (num_i === 0){
                //do nothing
            } else {
                if (colorsMap.has(theColor)){
                    colorsMap.get(theColor).push(lineCount)
                } else {
                    let linesArray = [];
                    linesArray.push(lineCount);
                    colorsMap.set(theColor,linesArray)
                    colorsOccured.push(theColor)
                }
            }
        }
        lineCount++
        if (lineCount === n+1){
            colorsOccured.forEach(function (item) {
                let linesArray = colorsMap.get(item)
                let ifError = false;
                if (linesArray.length > 1){
                    //console.log('T')
                    linesArray.forEach(function (item,index) {
                        if (linesArray[index+1]) {
                            //console.log('not the last one')
                            let diff = linesArray[index+1] - item;
                            //console.log(item)
                            //console.log(linesArray[index+1])
                            //console.log(diff)
                            if (diff < m) {
                                ifError = true
                            }
                        }
                        else {
                            if (item+m>n){
                                let diff = n-item+linesArray[0];
                                //console.log(diff)
                                if (diff < m){
                                    ifError = true
                                }
                            }
                        }
                    })
                    if (ifError === true){
                        errorColorCount++
                    }
                }
                //console.log(errorColorCount)
            })
            console.log(errorColorCount)
            //console.log(colorsOccured)
            //console.log(colorsMap)
            lineCount = 0;
        }
    }
})
