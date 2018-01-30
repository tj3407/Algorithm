// Array: Push Front - DONE
// Given array and an additional value, insert this value at the 
// beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, val){
    var newArr = [];
    newArr[0] = val;
    for(var i = 0; i < arr.length; i++){
        newArr[i+1] = arr[i];
    }
    return newArr;
}

myArr = [2,4,6,1,3];
console.log(pushFront(myArr, "leg"));

// Array: Insert At - DONE
// Given array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of 
// pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, idx, val){
    var newArr = [];
    for(var j = 0; j < idx; j++){
        newArr[j] = arr[j];
    }
    newArr[idx] = val;
    for(var i = idx; i < arr.length; i++){
        newArr[i + 1] = arr[i];
    }
    return newArr;
}
console.log(insertAt(myArr, 5, "leg"));

// Array: Pop Front - DONE
// Given array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().

function popFront(arr){
    var val = arr[0];
    var newArr = [];
    for(var i = 1; i < arr.length; i++){
        newArr[i-1] = arr[i];
    }
    console.log(newArr);
    return val;
    
}

popFront(myArr);

// Array: Remove At - DONE
// Given array and an index into array, remove and return the array value at that 
// index. Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx){
    var newArr = [];
    for(var j = 0; j < idx; j++){
        newArr[j] = arr[j];
    }
    for(var i = idx; i < arr.length-1; i++){
        newArr[i] = arr[i+1];
    }
    return newArr;
}

console.log(removeAt(myArr, 4));

// Array: Swap Pairs - DONE
// Swap positions of successive pairs of values of given array. 
// If length is odd, do not change the final element. For [1,2,3,4], 
// return [2,1,4,3]. For example, change input ["Brendan",true,42] 
// to [true,"Brendan",42]. As with all array challenges, do this without 
// using any built-in array methods.

function swapPairs(arr){
    for(var i = 0; i < arr.length; i += 2){
        if(arr[i + 1] == undefined){
            break;
        }
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

arr2 = [4, "leg", 5, "room", 5];
console.log(swapPairs(arr2));

// Array: Remove Duplicates - DONE
// Sara is looking to hire an awesome web developer and has received 
// applications from various sources. Her assistant alphabetized them 
// but noticed some duplicates. Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be 
// grouped together. As with all these array challenges, do this without using 
// any built-in array methods.
//  
// Second: solve this without using any nested loops.

function removeDuplicates(arr){
    var newArr = [];
    for(var i = 0, j = 0; i < arr.length; i++, j++){
        newArr[j] = arr[i];
        if(arr[i] == arr[i+1]){
            i++;
        }
    }
    return newArr;
}

arr3 = [1,1,3,3,5,6,7,4,4];
console.log(removeDuplicates(arr3));