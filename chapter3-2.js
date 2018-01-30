// Array: Min to Front - DONE
// Given an array of comparable values, move the lowest element to 
// array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it 
// to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    var min = arr[0];
    var index = 0;
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            index = i;
        }
    }
    newArr[0] = min;
    for(var j = 0, k = 1; j < arr.length; j++, k++){
        if(j == index){
            j++;
            if(j == arr.length){
                break;
            }
        }
        newArr[k] = arr[j];
    }
    return newArr;
}

myArr = [4,3,1];
console.log(minToFront(myArr));

// Array: Reverse - DONE
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved 
// to other indices so that order of elements is reversed. Working ‘in-place’ means 
// that you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

function reverse(arr){
    for(var i = arr.length-1, j = 0; i >= arr.length/2; i--, j++){
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        console.log(temp, arr[j], arr[i]);
    }
    return arr;
}
myArr = [4,3,1,6,8,4,3,2,6,7,8,4];
console.log(reverse(myArr));

// Array: Rotate - DONE
// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that 
// shift off array’s end to the other side, so that no data is lost. Operate in-place: 
// given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    while(shiftBy > 0){
        var temp = arr[arr.length-1];
        for(var i = arr.length-1; i >= 0; i--){
            if(i == 0){
                arr[i] = temp;
                break;
            }
            arr[i] = arr[i-1];
        }
        shiftBy--;
    }
    return arr;
}

myArr = [4,3,1,6,8,4,3,2,6,7,8,4];
console.log(rotateArr(myArr, 4));

// Array: Filter Range - DONE
// Alan is good at breaking secret codes. One method is to eliminate values 
// that lie within a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: return the 
// array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max){
    // store array length - needed later on for decrementing array length
    var arrLength = arr.length;
    // move values between arr[min] and arr[max] to beginning of array
    for(var i = min+1, j = 0; i < max; i++, j++){
        arr[j] = arr[i];
    }
    // remove remaining values at end of array by decrementing length
    for(var j = 0; j < arrLength - (max-min-1); j++){
        arr.length--;
    }
    return arr;
}
myArr2 = [4,3,1,6,8,4,3,2,6,7,8,4];
console.log(filterRange(myArr2, 1, 8));

// Array: Concat - DONE
// Replicate JavaScript’s concat(). Create a standalone function that 
// accepts two arrays. Return a new array containing the first array’s 
// elements, followed by the second array’s elements. Do not alter the 
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new 
// array ['a','b',1,2].

function arrConcat(arr1, arr2){
    var newArr = arr1; // initialize new array and set arr1 to it
    // add elements of arr2 starting at the end of the new array
    for(var i = 0, j = arr1.length; i < arr2.length; i++, j++){
        newArr[j] = arr2[i];
    }
    return newArr;
}
myArr1 = ['a','b',4,'t',7];
myArr2 = [1,2,'e','f',6];
console.log(arrConcat(myArr1, myArr2));


// Skyline Heights - DONE
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
// Let’s say you are given an array with heights of consecutive buildings, 
// starting closest to you and extending away. Array [-1,7,3] would represent 
// three buildings: first is actually out of view below street level, 
// behind it is second at 7 stories high, third is 3 stories high (hidden 
// behind the 7-story). You are situated at street level. Return array 
// containing heights of buildings you can see, in order. Given [-1,1,1,7,3] 
// return [1,7]. Given [0,4] return [4]. As always with challenges, 
// do not use built-in array functions such as unshift().

function skylineHeights(arr){
    var newArr = [];
    var startPoint = 0;
    for(var k = 0; k < arr.length; k++){
        if(arr[k] > 0){
            newArr[0] = arr[k];
            startPoint = k;
            break;
        }
    }
    for(var i = startPoint, j = 0; i < arr.length; i++){
        if(arr[i] > newArr[j]){
            j++;
            newArr[j] = arr[i];
        }
    }
    return newArr;
}

var array = [0, 4];
console.log(skylineHeights(array));