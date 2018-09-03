var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort(function(a,b) {return b-a});
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let l = this.nums.length;
    if(l<1){
        this.nums.push(val);
        return val;
    }
    for(let i=0;i<l;i++){
        if(val>this.nums[i]){
            this.nums.splice(i,0,val);
            break;
        }
        if(i===l-1){
            this.nums.push(val);
            break;
        }
    }
    return this.nums[this.k-1];
};

let kthLargest = new KthLargest(3,[4,5,8,2]);
console.log(kthLargest.add(3));   // returns 4
console.log(kthLargest.nums); // [8,5,4,3,2]
console.log(kthLargest.k) // 3