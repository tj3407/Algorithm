/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let left = 0;
    let right = nums.length-1;
    let sortedArr = quicksort(nums, left, right);
    console.log(sortedArr);
    return sortedArr[right+1 - k];
};

function quicksort(arr, left, right) {
    if (left >= right) return;

    let pivot = arr[Math.floor((left+right)/2)];
    let partitionIndex = partition(arr, left, right, pivot);

    quicksort(arr, left, partitionIndex-1);
    quicksort(arr, partitionIndex, right);
    return arr;
}

function partition(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

console.log('k =2:', findKthLargest([3,2,1,5,6,4], 2));
console.log('k = 2:', findKthLargest([3,2,1,5,6,6,4], 2));
console.log('k = 4:', findKthLargest([5,2,4,1,3,6,0], 4));
