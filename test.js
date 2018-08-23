let a = [];
a.num = 1;
function change(){
    this.num = 3;
}
console.log(a.change)