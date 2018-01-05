// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to 
// number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).”

function sigma(num){
    var sum = 0;
    if(num < 0){
        console.log("Error: Negative number");
    } else {
        for(var i = 0; i <= num; i++){
            sum += i;
        }
    }
    return sum;  
}
//console.log(sigma(3));

// Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, 
// returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).”

function factorial(num){
    var factor = 1;
    if(num < 0){
        console.log("Error: Negative number");
    } else {
        for(var i = 1; i <= num; i++){
            factor *= i;
        }
    }
    return factor; 
}
// console.log(factorial(10));

/* “Star Art
Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces 
and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. 
Depending on which function is called, those stars should be left-justified (first star would be very 
first char in the text field), or right-justified (last star would be very last char in the text field, 
with potentially some number of spaces at beginning of text field before the block of stars start), 
or centered in the 75-character text field (with same number of spaces on either side of the block of 
stars, plus/minus one).” */

function drawLeftStar(num){
    var str = "";
    for(var i = 0; i < num; i++){
        str += "*";
    }
    console.log(str);
}

function drawRightStar(num){
    var str = "";
    for(var i = 75-num; i > 0; i--){
        str += " ";
    }
    for(var j = num; j > 0; j--){
        str += "*";
    }
    console.log(str);
}

function drawCenteredStars(num){
    var str = "";
    for(var i = 0; i < Math.trunc(75/2) - Math.trunc(num/2); i++){
        str += " ";
    }
    for(var j = 0; j < num; j++){
        str += "*";
    }
    var remain = 75-(str.length);
    for(var k = 0; k < remain; k++){
        str += " ";
    }
    console.log(str);

}

// drawLeftStar(10);
// drawRightStar(10);
// drawCenteredStars(18);

/* Character Art
From the above, derive the following that accept and draw the given characters, not just asterisks:
drawLeftChars(num,char)        // For all three of these, you
drawRightChars(num,char)       // can safely assume that 'char'
drawCenteredChars(num,char)    // is a string with length 1” */


function drawLeftStar(num, char){
    var str = "";
    for(var i = 0; i < num; i++){
        str += char;
    }
    console.log(str);
}

function drawRightStar(num, char){
    var str = "";
    for(var i = 75-num; i > 0; i--){
        str += " ";
    }
    for(var j = num; j > 0; j--){
        str += char;
    }
    console.log(str);
}

function drawCenteredStars(num, char){
    var str = "";
    for(var i = 0; i < Math.trunc(75/2) - Math.trunc(num/2); i++){
        str += " ";
    }
    for(var j = 0; j < num; j++){
        str += char;
    }
    var remain = 75-(str.length);
    for(var k = 0; k < remain; k++){
        str += " ";
    }
    console.log(str);

}


drawLeftStar(10, '&');
drawRightStar(10, '^');
drawCenteredStars(18, '$');


