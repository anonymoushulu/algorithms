/*// 方法一,正常二分搜索
Array.prototype.binary_search = function(low, high, khey) {
    if (low > high)
        return -1;
    var mid = parseInt((high + low) / 2);
    if (this[mid] > khey)
        return this.binary_search(low, mid - 1, khey);
    if (this[mid] < khey)
        return this.binary_search(mid + 1, high, khey);
    return mid;
};

var arr = new Array(1,2,3,4,5,6,7)

console.log(arr.binary_search(0,6,3))*/

// 方法二，二分搜索变形，找出target最大下标值
function biSearchMax(data,target) {
    var left = 0;
    var right = data.length-1;
    var index = null;
    while (left<right){
        //向下取整
        var mid = parseInt((left+right)/2)
        if(data[mid]>target){
            right = mid-1;
        }
        else if(data[mid]<target) {
            left = mid+1;
        }
        else if (data[mid]==target){
            index = mid;
            left = mid+1;
        }
    }
    console.log(index)
}

// Test
var data = [1,2,3,4,5,5,5,5,5,5,6,7,8]
var target = 5
biSearchMax(data,target)