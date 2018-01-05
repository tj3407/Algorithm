// “Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?”

function countdown(num){
    var arr = [];
    for(var i = num; i >= 0; i--){
        arr.push(i);
    }
    return (arr);
}

// console.log(countdown(7));

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.”

function printReturn(arr){
    // console.log(arr[0]);
    return(arr[1]);
}
var myArr = [1,2];
// console.log(printReturn(myArr));

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).”

function firstPlusLength(arr) {
    var sum = arr[0] + arr.length;
    return sum;
}
var myArr = ["blue",1,5,5];
// console.log(firstPlusLength(myArr));

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.”

function thislengthThatvalue(num1, num2){
    var arr = [];
    for(var i=0; i < num1; i++){
        arr.push(num2);
    }
    if(num1 === num2){
        // console.log("Jinx!");
    }
    return arr;
}
// console.log(thislengthThatvalue(7,7));

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".”

function fitTheFirstValue(arr){
    if(arr[0] > arr.length){
        // console.log("Too big!");
    } else if(arr[0] < arr.length){
        // console.log("Too small!");
    } else {
        // console.log("Just right!");
    }
}
var myArr = [3,4,5];
// fitTheFirstValue(myArr);


// *---------------------------------
// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. 
// Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, 
// and returns the equivalent temperature as expressed in” “Celsius degrees. 
// For review, Fahrenheit = (9/5 * Celsius) + 32.”

function fahrenheitToCelsius(fDegrees){
    var celcius = Math.trunc((5/9) * (fDegrees - 32));
    return celcius;
}
// console.log(fahrenheitToCelsius(80));


// *------------------------------------------------
// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, 
// and returns the equivalent temperature expressed in Fahrenheit degrees.
// (optional) Do Fahrenheit and Celsius values equate at a certain number? 
// Scientific calculation can be complex, so for this challenge just try a series of 
// Celsius integer values starting at 200, going downward (descending), checking whether it is equal to 
// the corresponding Fahrenheit value.”

function celsiusToFahrenheit(cDegrees){
    var fahrenheit = Math.trunc(((9/5) * cDegrees)+ 32);
    return fahrenheit;
}
// console.log(celsiusToFahrenheit(26));

function equal(){
    for(var i = 200; i >= -50; i--){
        if(Math.trunc(((9/5) * i)+ 32) == i){
            // console.log("Found it: ", i);
        }

    }
}
// equal();

