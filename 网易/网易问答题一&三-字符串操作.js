const a = {
    'name':'hyk',
    'email':'hyk94@gmail.com'
}
const url = 'www.hyk.com'

let keys = []

for (let key in a){
    keys.push(key)
}

let params = ''
for (let i=0;i<keys.length;i++){
    params = params + keys[i] + '=' + a[keys[i]] + '&'
}
params = '/?'+params.replace(/&*$/g,'');
let fullUrl = url+params;
console.log(fullUrl)