// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // find lowest val
    if (nums === null || nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    // search([4,5,6,7,0,1,2], 5))
    //                 lr

    // get the lowest value in array
    while (left < right) {
        let midpoint = Math.floor(left + (right - left) / 2);
        if (nums[midpoint] > nums[right]) {
            left = midpoint+1;
        } else {
            right = midpoint;
        }        
    }
    
    let start = left;
    left = 0;
    right = nums.length - 1;
    
    if (target >= nums[start] && target <= nums[right]) {
        left = start;
    } else {
        right = start;
    }
    
    // binary search
    while (left <= right) {
        let midpoint = Math.floor(left + (right - left) / 2);
        if (nums[midpoint] == target) {
            return midpoint;
        } else if (nums[midpoint] < target) {
            left = midpoint+1;
        } else {
            right = midpoint;
        }
    }
    
    return -1;
};

console.log('result:', search([4,5,6,7,0,1,2], 5)) // expected result: 4