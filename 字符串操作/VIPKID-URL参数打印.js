let url = 'https://www.nowcoder.com/search?query=VIPKID&type=post'

let index = url.indexOf('?');
url = url.slice(index+1);
let arr = url.split('&');
arr.map(x => {
    let kv = x.split('=');
    for (let i of kv){
        console.log(i)
    }
})