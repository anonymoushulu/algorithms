function plus(number1, number2) {
    let num1 = number1.split('');
    let num2 = number2.split('');
    num1 = num1.reverse();
    num2 = num2.reverse();
    let len = num1.length > num2.length ? num1.length:num2.length;
    let result = [];
    function sum(num1,num2) {
        for (let i=0;i<len;i++){
            let sum;
            if(num2[i]){
                sum = Number(num1[i]) + Number(num2[i]);
            } else {
                sum = Number(num1[i]) + 0;
            }
            if(sum>=10){
                num1[i+1] = Number(num1[i+1]) + 1;
                sum -= 10;
            } else{
                //sum = sum;
            }
            result.push(sum);
        }
    }
    if(num1.length > num2.length){
        sum(num1,num2);
    } else {
        sum(num2,num1);
    }
    result = result.reverse();
    let number3 = result.join('');
    return number3; // number1 + number2
}

console.log(plus("92395","5556789"));
console.log(plus('1234599999999999999999999999999999','66666666'));