/*输入：
typedef int INT; typedef INT** INTP;
INTP
输出：
int * *
这题好像是c++指针传递之类的？不适合nodejs写。
思路：
type = [
{
    type: INTP,
    prototype: INT,
    point:**
},
{
    type: INT,
    prototype: int,
    point:
}
]
*/

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let lineCount = 0;
let typedefs = [];
let input = '';

rl.on('line', (line)=>{
    if (lineCount===0){
        typedefs = line.split(';')
        lineCount
    }
})
