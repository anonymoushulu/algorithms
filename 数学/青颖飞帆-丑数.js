function isUgly(num) {
    while (num%2 === 0){
        num /= 2;
    }
    while (num%3 === 0){
        num /= 3;
    }
    while (num%5 === 0){
        num /= 5;
    }
    return num === 1;
}

// 丑数 >= 1
for (let i=1;i<10;i++){
    console.log(isUgly(i))
}