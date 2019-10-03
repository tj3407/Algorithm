const arrayContains = (arr, val) => {
    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid] === val) {
            console.log('element found');
            return true; 
        } else if (arr[mid] < val) { // Else look in left or right half accordingly 
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }
    console.log('element not found');
    return false; 
}

let arr = [1, 3, 5, 7, 8, 9]; 
let x = 5; 

console.log(arrayContains(arr, x));