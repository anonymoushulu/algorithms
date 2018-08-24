// Promise对象的简单例子
function timeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});

// Promise新建后就会立即执行
// then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved.');
});

console.log('Hi!');

// 异步加载图片
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}
