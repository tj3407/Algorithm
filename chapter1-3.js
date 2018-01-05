// “Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. 
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].”

function biggieSize(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
var myArr = [-1,-3,4,5,-6,7];
// console.log(biggieSize(myArr));

// “Print Low, Return High
// Create a function that takes array of numbers. The function should print the lowest value in the array, 
// and return the highest value in the array.”

function  printlowReturnhigh(arr){
    var high = arr[0];
    var low = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > high){
            high = arr[i];
        }
        if(arr[i] < low){
            low = arr[i];
        }
    }
    // console.log(low);
    return(high);
}
var myArr = [3,5,-1,-7,2,8,3];
// console.log(printlowReturnhigh(myArr));


// Print One, Return Another
// Build a function that takes array of numbers. The function should print second-to-last value in 
// the array, and return first odd value in the array.”

function printoneReturnanother(arr){
    // console.log(arr[arr.length-2]);
    for(var i = 0; i < arr.length; i++){
        if((arr[i]%2) != 0){
            return arr[i];
        }
    }
}

// console.log(printoneReturnanother(myArr));


// Double Vision
// “Given array, create a function to return a new array where each value in the original 
// has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.”

function doubleVision(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}

// console.log(doubleVision(myArr));

// “Count Positives
// Given array of numbers, create function to replace last value with number of positive values. 
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.”

function countPositives(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
// console.log(countPositives(myArr));

// “Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, 
// print "That’s odd!" Every time the array has three evens in a row, print "Even more so!”

function evensOdds(arr){
    var countOdd = 0;
    var countEven = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            countEven = 0;
            countOdd++;
            if(countOdd == 3){
                console.log("That's odd");
            }
        } else if(arr[i]%2 === 0){
            countOdd = 0;
            countEven++;
            if(countEven == 3){
                console.log("Even more so!");
            }
        }
    }
}
var myArr = [1,5,3,6,8,4,7];
// evensOdds(myArr);


// “Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0 ){
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}
// console.log(incrementSeconds(myArr));

// “Previous Lengths
// You are passed an array containing strings. Working within that same array, 
// replace each string with a number – the length of the string at previous array index – 
// and return the array.”

function previousLengths(arr){
    for(var i = arr.length-1; i >= 0; i--){
        if(typeof arr[i] == "string" && i != 0){
            arr[i] = arr[i-1].length;
        } 
    }
    return arr;
}
var myArr = ["cyan","blue", "red", "yellow", "white"];
// console.log(previousLengths(myArr));


// “Add Seven to Most
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. 
// Do not alter the original array.”

function addSeven(arr) {
    var newArr = [];
    newArr.push(arr[0]);
    for(var i = 1; i < arr.length; i++){
        arr[i] = arr[i] + 7;
        newArr.push(arr[i]);
    }
    return newArr;
}
var arr2 = [2,4,6,7,4,9];
// console.log(addSeven(arr2));

// “Reverse Array
// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].”


function reverseArray(arr){
    var tempArr = [];
    for(var i = arr.length-1; i >= 0; i--){
        tempArr.push(arr[i]);
    }
    return tempArr;
}
// console.log(reverseArray(arr2));


// “Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, 
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].”

function outlookNegative(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }
    return arr;

}
var arr3 = [3,5,-6,-9,2,2];
// console.log(outlookNegative(arr3));


// “Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal 
// to "food". If no array elements are "food", then print "I'm hungry" once.”

function alwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            count++;
        }
    }
    if(count === 0){
        console.log("I'm hungry");
    }
}
var arr4 = [1, 4, 5, 2, "yummy", "yes"];
// alwaysHungry(arr4);

// Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. 
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. [1,2,3,4] [4,2,3,1]
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].” [1,2,3,4,5,6,7] [7,2,5,4,3,6,1]

function swapTowardsCenter(arr) {
    var temp = arr[0];
    var lastIndex = arr.length-1;
    for(var i = 0; i < arr.length/2; i+=2, lastIndex-=2){
        temp = arr[i];
        arr[i] = arr[lastIndex];
        arr[lastIndex] = temp;
    }
    return arr;

}
var arr5 = [1,2,3,4,5,6,7];
// console.log(swapTowardsCenter(arr5));


// “Scale the Array"
// Given array arr and number num, multiply each arr value by num, and return the changed arr.”

function scaleArray(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}
console.log(scaleArray(arr5, 2));