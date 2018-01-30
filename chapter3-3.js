// Array: Remove Negatives - DONE
// Implement removeNegatives() that accepts an array, removes negative values, 
// and returns the same array (not a copy), preserving non-negatives’ order. 
// As always, do not use built-in array functions.
//  
// Second: don’t use nested loops.

function removeNegatives(arr){
    var arrLength = arr.length;
    for(var i = 0, positiveIdx = 0; i < arr.length; i++){
        // Keep track of index of last element that is of positive value
        // and increment if next element is also of positive value,
        // otherwise, do not increment
        if(arr[i] > 0){
            arr[positiveIdx] = arr[i];
            positiveIdx++;
        }
    }
    for(var k = 0; k < arrLength - positiveIdx; k++){
        arr.length--;
    }
    return arr;
}
array = [4,5]
console.log(removeNegatives(array));

// Array: Second-to-Last - DONE
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], 
// return "Kate". If array is too short, return null.

function secondToLast(arr){
    if(arr.length >= 2){
        return arr[arr.length-2];
    } else{
        console.log("Array is too short");
    }
}

console.log(secondToLast(array));

// Array: Nth-to-Last - DONE
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), 
// return 4. If the array is too short, return null.

function nthToLast(arr, idx){
    if(arr.length >= idx){
        return arr[arr.length - idx];
    } else{
        console.log("Array is too short");
    }
}

myArr = [5,2,3,6,4,9,7];
console.log(nthToLast(myArr, 1));


// Array: Second-Largest - DONE
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], 
// return 7. If the array is too short, return null.

function secondToLargest(arr){
    // perform function if array length is long enough - else return null
    if(arr.length >= 2){
        var highest = arr[0];
        var secondHighest = arr[arr.length-1];
        // traverse through array from beggining and end of array at the same time
        // looking for highest element starting from beginning of array
        // and looking for second highest element starting from end of array
        for(var i = 1, j = arr.length-2; i < arr.length; i++, j--){
            if(highest < arr[i]){
                highest = arr[i];
            }
            if(arr[j] > secondHighest && arr[j] < highest){
                secondHighest = arr[j];
            }
        }
    } else{
        console.log("Array is too short");
        return null;
    }
    return secondHighest;
}

myArr2 = [11,2,5,7,34,5,6,8];
console.log(secondToLargest(myArr2));

// Array: Nth-Largest - DONE
// Liam has "N" number of Green Belt stickers for excellent Python projects. 
// Given arr and N, return the Nth-largest element, where (N-1) elements are larger. 
// Return null if needed.

function nthLargest(arr, N){
    // only run function if array length is at least N size
    if(arr.length >= N){
        var temp = arr[0];
        // sort array in ascending order
        for(var i = 0; i < arr.length; i++){
            for(var j = i; j < arr.length; j++){
                if(arr[j] < arr[i]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    } else{
        console.log("Array is too short");
        return null;
    }
    // after sorting array, Nth largest element is arr[arr.length-N]
    return arr[arr.length - N];
}

console.log(nthLargest(myArr2, 4));

// Credit Card Validation
// The Luhn formula is sometimes used to validate credit card numbers. 
// Create the function isCreditCardValid(digitArr) that accepts an array 
// of digits on the card (13-19 depending on the card), and returns a boolean whether 
// the card digits satisfy the Luhn formula, as follows:
//  
// 1)      Set aside the last digit; do not include it in these calculations 
//         (until step 5);
// 2)      Starting from the back, multiply the digits in odd positions 
//         (last, third-to-last, etc.) by 2;
// 3)      If any results are larger than 9, subtract 9 from them;
// 4)      Add all numbers (not just our odds) together;
// 5)      Now add the last digit back in – the sum should be a multiple of 10.
//  
// For example, when given digit array [5,2,2,8,2], after step 1) it 
// becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], 
// then following 4) it becomes 18. After step 5) our value is 20, so 
// ultimately we return true. If the final digit were any non-multiple-of-10, 
// we would instead return false.

function isCreditCardValid(digitArr){
    // 1. Set aside the last digit
    var temp = digitArr[digitArr.length-1];
    // do not include last digit in calculations
    digitArr.length--;
    var sum = 0;
    // 2. Starting from the back, multiply the digits in odd positions 
    // (last, third-to-last, etc.) by 2;
    for(var i = digitArr.length-1; i >= 0; i -= 2){
        digitArr[i] *= 2;
        // 3. If any results are larger than 9, subtract 9 from them;
        if(digitArr[i] > 9){
            digitArr[i] -= 9;
        }
    }
    // 4. Add all numbers (not just our odds) together;
    for(var j = 0; j < digitArr.length; j++){
        sum += digitArr[j];
    }
    // 5. Now add the last digit back in – the sum should be a multiple of 10.
    sum += temp;
    if(sum%10 == 0){
        return true;
    } else{
        return false;
    }
}

myArr3 = [5,2,2,8,2];
console.log(isCreditCardValid(myArr3));