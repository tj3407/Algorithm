function threesFives(){
    var sum = 0;
    for(var i = 100; i <= 4000000; i++){
        if(i%3 == 0 || i%5 == 0){
            if(i%3 && i%5 == 0){
                continue;
            }
            sum += i;  
        }
    }
    return sum;
}

// console.log(threesFives());

function betterThreesFives(a, b){
    var sum = 0;
    for(var i = a; i <= b; i++){
        if(i%3 == 0 || i%5 == 0){
            if(i%3 && i%5 == 0){
                continue;
            }
            sum += i;  
        }
    }
    return sum;
}

// console.log(betterThreesFives(3,15));

function generateCoinChange(cents){
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    var total = cents;
    while(total > 0){
        if(total >= 25){
            quarter++;
            total -= 25;
        } else if(total >= 10){
            dime++;
            total -= 10;
        } else if(total >= 5){
            nickel++;
            total -= 5;
        } else if(total >= 1){
            penny++;
            total--;
        }
    }
    console.log(cents, "can be represented by:");
    console.log("quarters:", quarter);
    console.log("dimes:", dime);
    console.log("nickels:", nickel);
    console.log("pennis:", penny);
}

// generateCoinChange(94);

function messyMath(num){
    var sum = 0;
    for(var i = 1; i <= num; i++){
        if(i == num/3){
            return -1;
        }
        if(i%3 == 0){
            continue;
        }
        if(i%7 == 0){
            sum += i*2;
            continue;
        }
        sum += i;
    }
    return sum;
}

// console.log(messyMath(10));

function twelveBarBlues(){
    for(var i =1; i <= 12; i++){
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}

// twelveBarBlues();

// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number 
// is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, 
// an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), 
// fibonacci(7) = 13 (5+8), etc.”

function fibonacci(index){
   var a = 1;
   var b = 0;
   var temp;
   while(index > 0){
       temp = a;
       a = a + b;
       b = temp
       index--;
   }
   return b;
    
}

// console.log(fibonacci(5));

function sumToOne(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        sum += num
    }
}

// console.log(sumToOne(978));

// Clock Hand Angles - SEMI DONE
// Regardless of how bad a Dojo student works (and they should work hard), they need time now and then to unwind -
// like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock's hands
// of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00,
// prints angles (in degrees) of the hour, minute and second hands. As review, 360 degress form a full rotation. 
// For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs."
// For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log
// "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for
// the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that
// minute so far.

function clockHandAngles(seconds){
    var hourAngle = 0;
    var hour = 0;
    var minute = 0;
    var minuteAngle = 0;
    var second = 0;
    var secondsAngle = 0;
    if(seconds >= 3600){
        hour = Math.trunc(seconds / 3600);
        if(hour >= 24){
            hour = hour - 24;
        }
        hourAngle = hour * 30;
        minute = Math.trunc((seconds%3600) / 60);
        second = (seconds%3600) % 60;
    }
    hourAngle = hour *30;
    minuteAngle = minute * 6;
    secondsAngle = second * 6;
    for(var i = second; i > 0;){
        if(i >= 10){
            minuteAngle++;
            i -= 10;
        } else {
            minuteAngle += .1;
            i--;
        }
    }
    for(var j = seconds%3600; j > 0;){
        if(j >= 120){
            hourAngle++;
            j -= 120;
        } else {
            hourAngle += .00833;
            j--;
        }
    }
    hourAngle = hourAngle.toFixed(4);
    

    console.log("Hour hand:", hourAngle, "degs. Minute hand:", minuteAngle, "degs. Seconds hand:", secondsAngle, "degs."); 
}

// clockHandAngles(119730);

// Is Prime - DONE
// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly
//optimized solutions exist, but for now just create one that is easy to understand and debug.
function isPrime(num){
    if(num%2 == 0 || num%3 == 0 || num%5 == 0){
        return false;
    } else {
        return true;
    }
}

// console.log(isPrime(18));