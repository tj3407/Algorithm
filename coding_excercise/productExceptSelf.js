/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    return nums.map((item, idx) => {
        let result = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i !== idx) {
                result *= nums[i];
            }
        }
        return result;
    })
};

console.log('productExceptSelf1', productExceptSelf([1,2,3,4]));

var productExceptSelf2 = function(nums) {
    var left = [];
    var right = [];
    
    // fill array
    left[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        left[i] = left[i-1] * nums[i-1];
    }
    
    right[nums.length-1] = 1;
    for(let j = nums.length - 2; j >= 0; j--) {
        right[j] = right[j+1] * nums[j+1];
    }
    
    var output = [];
    for(let k = 0; k < nums.length; k++) {
        output[k] = left[k] * right[k];
    }
    return output;
};

console.log('productExceptSelf2: ', productExceptSelf2([1,2,3,4]));