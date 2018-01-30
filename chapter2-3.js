// Rockin’ the Dojo Sweatshirt - DONE
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo 
// sweatshirts – maybe “even more than one. Let’s say they cost $20 (including tax), 
// but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if 
// you buy three, or a sweet 35% discount if you buy four or more. He only accepts 
// cash and says he doesn’t have coins, so you should round up to the nearest dollar. 
// Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns 
// the cost.

function sweatshirtPricing(num){
    var cost = 20;
    if(num >= 4){
        return Math.ceil((num * cost) - ((num * cost) * .35))
    }
    else if(num == 3){
        return Math.ceil((num * cost) - ((num * cost) * .19))
    }
    else if(num == 2){
        return Math.ceil((num * cost) - ((num * cost) * .09))
    }
    else{
        return cost;
    }
}

// console.log(sweatshirtPricing(10))


// Clock Hand Angles, Revisited
// Return to your previous clockHandAngles solution. 
// Allow fractional values for input seconds, but change your implementation 
// to print only integer values for angles (in degrees) of the various hands.

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

// Extract-o-matic - DONE
// Create the extractDigit(num,digitNum) function that given a number and 
// a digit number, returns the numeral value of that digit. 0 represents the 
// ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. 
// Given (1824,0), return 4. Given (1824,7), return 0.
//  
// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), 
// -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.
//  
// Third: handle negative num values as well, doing what you think is appropriate.

function extractDigit(num, digitNum){
    var divisor = 1;
    if(num < 0){
        num *= -1;
    }
    if(digitNum > 0){
        while(digitNum > 0){
            divisor *= 10;
            digitNum--;
        }
        return (Math.floor(num/divisor)%10);
    } else {
        while(digitNum < 0){
            divisor *= 10;
            digitNum++;
        }
        return (Math.floor(num*divisor)%10);
    }
}
// console.log(extractDigit(-1824.56789,3))

// Most Significant Digit - DONE
// If you already know who Ada Lovelace is, that’s great! In a History of Science, 
// she is significant. Given number of any size, return the most significant digit.
// If you already know what strings are, that’s great! However, don’t use them here. 
// Hint: use WHILE to bring the most significant digit into range where you can 
// use the friendly modulus operator (%). The most significant digit is the 
// leftmost non-zero digit of a number. Given 12345, return 1. Given 67.89, return 6. 
// Given 0.00987, return 9.
 
// Second: handle negative num values as well, doing what you think is appropriate.

function mostSignificantDigit(num){
    var digit = num;
    if(num < 0){
        num *= -1;
    }
    while(num > 9){
        digit = (Math.trunc(num/10)%10);
        num = Math.trunc(num/10);
    }
    return digit;
}

// console.log(mostSignificantDigit(-7556));

// Gaming Fun(damentals) - DONCE
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. 
// What could go wrong?
// 1)      Create function rollOne() to return a randomly selected integer between 1 
// and 6 (inclusive).  DONE
// 2)      Second, create a function playFives(num), which should call rollOne() 
// multiple times – ‘num' times, in fact, where 'num' is input parameter to 
// playFives(num). Each time, it should print the value rollOne() returns, 
// and if that return value is 5, also print “That’s good luck!” 
// 3)      Third, create a new function named playStatistics(), which should 
// call rollOne() eight times (but not print anything after each call). 
// After the last of these eight calls, it should print out the lowest and 
// highest values that it received from rollOne, among those eight calls. 
// 4)      Fourth, make a copy of playStatistics and add code to make 
// playStatistics2(), so that at the end (in addition to printing high/low rolls), 
// it also prints the total sum of all eight rolls.
// 5)      Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), 
// so that it will roll as many times as you want, instead of always doing 
// this eight times.
// 6)      Finally, make a copy of playStatistics3 and change it to create 
// playStatistics4(num), so that at the end instead of the total sum, it prints 
// the average roll.

function rollOne(){
    return Math.trunc(Math.random()*6)+1;
}

function playFives(num){
    var tempNum = 0;
    for(var i = 0; i < num; i++){
        tempNum = rollOne();
        if(tempNum == 5){
            console.log(tempNum, "That's good luck!");
        } else {
            console.log(tempNum);
        }
    }
}

function playStatistics(){
    var lowNum = rollOne();
    var highNum = rollOne();
    var tempNum = 0;
    if(lowNum > highNum){
        tempNum = highNum;
        highNum = lowNum;
        lowNum = tempNum;
    }
    var index = 0;
    while(index < 6){
        tempNum = rollOne();
        if(tempNum > highNum){
            highNum = tempNum;
        } else if(tempNum < lowNum){
            lowNum = tempNum;
        }
        index++;
    }
    console.log("Highest Number:", highNum);
    console.log("Lowest Number:", lowNum);
}

function playStatistics2(){
    var lowNum = rollOne();
    var highNum = rollOne();
    var tempNum = 0;
    var sum = lowNum + highNum;
    if(lowNum > highNum){
        tempNum = highNum;
        highNum = lowNum;
        lowNum = tempNum;
    }
    var index = 0;
    while(index < 6){
        tempNum = rollOne();
        sum += tempNum;
        if(tempNum > highNum){
            highNum = tempNum;
        } else if(tempNum < lowNum){
            lowNum = tempNum;
        }
        index++;
    }
    console.log("Highest Number:", highNum);
    console.log("Lowest Number:", lowNum);
    console.log("Sum:", sum);
}

function playStatistics3(num){
    var lowNum = rollOne();
    var highNum = rollOne();
    var tempNum = 0;
    var sum = lowNum + highNum;
    if(lowNum > highNum){
        tempNum = highNum;
        highNum = lowNum;
        lowNum = tempNum;
    }
    var index = 0;
    while(index < num-2){
        tempNum = rollOne();
        sum += tempNum;
        if(tempNum > highNum){
            highNum = tempNum;
        } else if(tempNum < lowNum){
            lowNum = tempNum;
        }
        index++;
    }
    console.log("Highest Number:", highNum);
    console.log("Lowest Number:", lowNum);
    console.log("Sum:", sum);
}

function playStatistics4(num){
    var lowNum = rollOne();
    var highNum = rollOne();
    var tempNum = 0;
    var sum = lowNum + highNum;
    if(lowNum > highNum){
        tempNum = highNum;
        highNum = lowNum;
        lowNum = tempNum;
    }
    var index = 0;
    while(index < num-2){
        tempNum = rollOne();
        sum += tempNum;
        if(tempNum > highNum){
            highNum = tempNum;
        } else if(tempNum < lowNum){
            lowNum = tempNum;
        }
        index++;
    }
    console.log("Highest Number:", highNum);
    console.log("Lowest Number:", lowNum);
    console.log("Average:", sum/num);
}

// playStatistics4(11);

// Statistics Until Doubles - SEMI DONE
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ 
// that randomly returns integers between 1 and 20 inclusive. Roll these, 
// tracking statistics until you get a value twice in a row. Display number 
// of rolls, min, max, and average.

function statsUntilDoubles(){
    // initial roll
    var num1 = Math.trunc(Math.random()*20)+1;
    var num2 = Math.trunc(Math.random()*20)+1;
    console.log(num1, num2);
    var count = 1;
    while(num1 != num2){
        num1 = Math.trunc(Math.random()*20)+1;
        num2 = Math.trunc(Math.random()*20)+1;
        console.log(num1, num2);
        count ++;
    }
    console.log("Number of rolls:", count)
    return true;
}

statsUntilDoubles();

// Claire is Where?
// On New Year’s Eve, have fun but don’t forget your way home! For this challenge 
// create four functions (reset, moveBy, xLocation and yLocation) to track 
// the travels of Claire, a wanderer. Calling reset() moves Claire home to the 
// origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, 
// in those directions. Finally, xLocation() and yLocation()return how far Claire 
// is from home, in X and Y directions respectively. After the calls of reset(), 
// moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() 
// should return 4 and -1.
//  
// Second: create distFromHome(). Assuming she moves diagonally, return her 
// distance from home.

var x = 0;
var y = 0;

function reset(){
    x = 0;
    y = 0;
}

function moveBy(xOffset, yOffset){
    x += xOffset;
    y += yOffset;
}

function xLocation(){
    return x;
}

function yLocation(){
    return y;
}

moveBy(1, -2);
moveBy(3, 1);
reset();
console.log(xLocation());
console.log(yLocation());

// Date, on a Deserted Island
// After a particularly fabulous New Year’s Eve party to end 2016, 
// Eduardo wakes to find himself stranded on a deserted island. He misses his 
// home in Burbank, but at least now he can spend plenty of time outdoors – and 
// you can’t beat the commute! To pass the time until he is rescued, he counts 
// sunrises.

// 1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) 
// function that, given a number between 1 and 7, will console.log a string 
// containing the day of the week for that number (given 1, log "Sunday"). 
// Use a SWITCH statement.

function weekdayName(weekdayNum){
    switch(weekdayNum){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Entered");
    }
}

weekdayName(8);

// 2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. 
// Return weekday as before, given number of days total. 
// "Sunday" still corresponds to 1.

function weekdayName2(dayNum){
    switch(dayNum){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Entered");
    }
}



// 3) Create a new function someDays() that calls weekDayName2() seventeen times, 
// with randomly generated integers as high as 365. Log each result string. 
// If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, 
// add "Enjoy your day off!"

// 4) Build function monthName(monthNum) that, given a number from 1 to 12, 
// returns a string containing month for that number ("May" corresponds to 5). 
// Use an array, without loops.

// 5) Now expand monthName() to create monthToDays(monthNum), returning 
// the number of days in that month, in the year 2017. Hint: use a SWITCH statement 
// for the days in each month.

// 6) Despite using his ember expertise to create a glowing SOS visible from space, 
// the days go by and sadly Eduardo is still not rescued. Is it spring yet? 
// It might as well be. Build on monthName() to create dayToMonth(dayNum). 
// If given a day number since the year began, return the current month 
// (assume it is not a Leap Year). Given 75, return "March".

// 7) Eduardo builds a Dojo bootcamp on the island. Initially his students only 
// find Ninja Gold in caves, but eventually even his tree sloths can write 
// code quickly! Dojo classes meet Monday thru Friday, so let’s reincorporate 
// weekday to our calculations. Construct fullDate(dayNum) to accept number of 
// days so far in 2017, and return a full date string. He hardly remembers that 
// fateful New Year’s Eve party, but he knows it was a Saturday. Given 142, 
// return "Monday, May 22, 2017".

// 8) Times flies when you’re at a Dojo – months in fact. Build fullDate2(dayNum) 
// that will be given a 4-digit integer: the days that have passed since 
// December 31, 2016. This number can[…] 29-day February. Given 8475, 
// return "Thursday, March 15, 2040".

// 9) Eduardo hacks the Google Maps API and adds this long-forgotten island 
// back onto the map. Soon he is rescued! News of his Hemingway-like stoicism 
// make him famous for centuries. Build fullDate3(dayNum) to handle days up 
// to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is). 
// Given 139947, return "Tuesday, February 29, 2400".

