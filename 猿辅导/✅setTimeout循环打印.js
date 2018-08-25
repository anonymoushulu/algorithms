/*
//方法一
function print(number,duration){
    for(let i=0;i<number;i++){
        setTimeout(function () {
            alert(i)
        },duration*i*1000);
    }
}
function alert(i) {
    console.log(i+1);
}
print(5,2)*/

//方法二
function print(num,dur){
    for(let i=0;i<num;i++){
        setTimeout(function(){
            console.log(i+1);
        },dur*i*1000)
    }
}

print(5,2)
