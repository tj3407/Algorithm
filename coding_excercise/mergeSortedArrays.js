/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let indexA = m-1;
    let indexB = n-1;
    let mergeIndex = nums1.length-1;
    
    while (indexA >= 0 && indexB >= 0) {
        if (nums1[indexA] > nums2[indexB]) {
            nums1[mergeIndex] = nums1[indexA];
            indexA--;
        } else {
            nums1[mergeIndex] = nums2[indexB];
            indexB--;
        }
        mergeIndex--;
    }
    
    while (indexB >= 0) {
        nums1[mergeIndex] = nums2[indexB];
        indexB--;
        mergeIndex--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
// console.log(merge())
// console.log(merge())