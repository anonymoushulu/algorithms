/*
输入：
8K67A65K27T59K346AK2
输出：
4
只能想到先出最大顺子，但是不对
*/
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function nextCard(str) {
    let cards = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
    for (let i=0;i<cards.length;i++){
        if (cards[i] === str){
            if (i === cards.length-1){
                return undefined
            }
            return cards[i+1]
        }
    }
}

function previousCard(str) {
    let cards = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
    for (let i=0;i<cards.length;i++){
        if (nextCard(cards[i]) === str){
            return cards[i]
        }
    }
}

//str is a initialize card, arr is all cards you have, temp is yi tiao long.
function shunzi(str,arr) {
    if (str === nextCard(temp[temp.length-1])){
        temp.push(str)
    } else {
        temp.splice(0,0,str);
    }
    for(let i=0;i<arr.length;i++){
        if (arr[i] === nextCard(temp[temp.length-1]) || arr[i] === previousCard(temp[0])){
            let theCard = arr[i];
            arr.splice(i,1);
            return shunzi(theCard,arr);
        }
    }
    return temp;
}

let temp = [];

rl.on('line', (line) => {
    let cards = line.split('');
    console.log(shunzi(cards[0],cards));
})
