// 把 Callback 接口包装成 Promise 接口

// ES6
/*let promisify = (fn, receiver) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn.apply(receiver, [...args, (err, res) => {
                return err ? reject(err) : resolve(res);
            }]);
        });
    };
};*/

//ES5
var promisify = function promisify(fn, receiver) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return new Promise(function (resolve, reject) {
            fn.apply(receiver, [].concat(args, [function (err, res) {
                return err ? reject(err) : resolve(res);
            }]));
        });
    };
};
/*
//有了 promisify 这样一个函数，那么把 Callback 接口变成 Promise 接口就非常简单了，如：
var fs = require("fs");
var readFilePromise = promisify(fs.readFile, fs); //包装为 Promise 接口
readFilePromise("foo.json", "utf8").then(function(content){
    //正常情况
}).catch(function(err){
    //异常情况
})*/




// callback转promise
const fs = require('fs');

let Promise = require('bluebird');

let readSync = function(filePath) {
    return new Promise(function(resolve, reject) {
        fs.unlink(filePath, (err) => {
            if(err) return reject(err);
            return resolve();
            })
        })
    }

readSync('log').then(function(data) {
    console.log('OKKKKK');
    }).catch(function(err) {
    console.log(err || 'errror!!');
})