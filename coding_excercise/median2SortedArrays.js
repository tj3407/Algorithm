/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums1.length;
    let b = nums2.length;
    if (a > b) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    
    let iMin = 0; iMax = a, mid = Math.floor((a+b+1) / 2);
    while (iMin <= iMax) {
        let i = (iMin + iMax) / 2;
        let j = mid - i;
        if (i < iMax && nums2[j-1] > nums1[i]) {
            iMin = i + 1;
        } else if (i > iMin && nums1[i-1] > nums2[j]) {
            iMax = i-1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j-1];
            } else if (j === 0) {
                maxLeft = nums1[i-1];
            } else {
                maxLeft = Math.max(nums1[i-1], nums2[j-1]);
            }

            if ((a+b)%2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === a) {
                minRight = nums2[j];
            } else if (j === b) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums2[j], nums1[i]);
            }

            return ((maxLeft+minRight)/2);
        }
    }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

var findMedianSortedArrays2 = function(nums1, nums2) {
    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            newArr.push(nums1[i]);
            i++;
        } else {
            newArr.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        newArr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        newArr.push(nums2[j]);
        j++;
    }

    let mid = Math.floor(newArr.length / 2);
    return newArr.length % 2 === 0 ? (newArr[mid] + newArr[mid-1]) / 2 : newArr[mid];
};

console.log(findMedianSortedArrays2([1, 3], [2]));
console.log(findMedianSortedArrays2([1, 2], [3, 4]));