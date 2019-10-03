/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let decreasing = true;
    let increasing = true;
    
    for (let i = 0; i < A.length-1; i++) {
        if (A[i] > A[i+1]) {increasing = false};
        if (A[i] < A[i+1]) {decreasing = false};
    }
    
    return increasing || decreasing;
};

console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
console.log(isMonotonic([1,2,4,5]));
console.log(isMonotonic([1,1,1]));