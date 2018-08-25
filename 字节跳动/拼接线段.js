//连接线段问题，提交时ac10%，后来做出来了，ac100%
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let m = 0;
let lineCount=0;
let tokens=[];
let article = [];
let output = '';

rl.on('line', (line)=>{
    if (lineCount===0){
        m=Number(line)
        lineCount++
    } else {
        let token = line.split(';');
        tokens = tokens.concat(token);
        lineCount++;
        if (lineCount===m+1){
            for (let i=0;i<tokens.length;i++){
                let theToken = tokens[i];
                theToken=theToken.split(',');
                let left = Number(theToken[0])-1;
                let right = Number(theToken[1])-1;
                for (let j=left;j<=right;j++){
                    article[j]=1;
                }
            }
            for (let i=0;i<article.length;i++){
                if (article[i]!==1){
                    article[i]=0;
                }
                let diff = article[i]-article[i-1];
                /*// 错误写法，ac10%
                if (diff===1 || article[i-1]===undefined){
                    output = output+(i+1)+',';
                }
                else if (diff===-1) {
                    output = output+(i)+';';
                }*/
                // 正确写法，预计ac100%
                if (article[0]===0){
                    if (diff===1){
                        output = output+(i+1)+',';
                    }
                    else if (diff===-1) {
                        output = output+(i)+';';
                    }
                }
                else if (article[0]===1){
                    if (diff===1 || article[i-1]===undefined){
                        output = output+(i+1)+',';
                    }
                    else if (diff===-1) {
                        output = output+(i)+';';
                    }
                }
            }
            if (output.slice(output.length)===';'){
                output=output.replace(/;*$/,'')
            } else {
                output=output+article.length;
            }
            console.log(output);
            output='';
            article=[];
            tokens=[];
            lineCount=0;
        }
    }
})