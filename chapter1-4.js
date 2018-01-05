// “Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately 
// shortens it by that amount. Given array arr and number X, remove all except the last X elements, 
// and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] 
// and return it.”

function onlyKeepTheLastFew(arr, number) {
    var count = arr.length-number;
    for(var i = 0; i < count; i++){
        arr.shift();
    }
    return arr;
}

var myArr = [2,4,5,2,3,5,5];
// console.log(onlyKeepTheLastFew(myArr, 6));


// “Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – 
// coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept 
// (his older cousin Fiaz wisely reminds him that X-intercept is the value of X”
    
function mathHelp(m,b){
    return (b * -1)/m;
}
// console.log(mathHelp(5,6));


// “Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. 
// Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 
// 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, 
// write whatHappensToday() to print a day’s outcome.”

function whatHappensToday() {
    var randomNum = Math.random()*100;
    if(randomNum <= 10){
        console.log("Volcano eruption!");
    } else if(randomNum > 10 && randomNum <= 25){
        console.log("Tsunami!");
    } else if(randomNum > 25 && randomNum <= 45){
        console.log("It's an earthquake!");
    } else if(randomNum > 45 && randomNum <= 70){
        console.log("Blizzard!");
    } else if(randomNum > 70 && randomNum <= 100){
        console.log("Meteor shower!");
    }    
}
// whatHappensToday();


// “What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the 
// chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). 
// In this new function test for each disaster independently, instead of assuming exactly one 
// disaster will happen. In other words, with this new function, all five might occur today – or none. 
// Maybe Kenny will survive!”

function whatReallyHappensToday() {
    var count = 0;
    if(Math.random()*100 <= 10){
        console.log("Volcano eruption!");
        count++;
    } 
    if(Math.random()*100 <= 15){
        console.log("Tsunami!");
        count++;
    } 
    if(Math.random()*100 <= 20){
        console.log("It's an earthquake!");
        count++;
    } 
    if(Math.random()*100 <= 25){
        console.log("Blizzard!");
        count++;
    } 
    if(Math.random()*100 <= 30){
        console.log("Meteor shower!");
        count++;
    }
    if(count === 0){
        console.log("It's a beautiful day!");
    }
}
// whatReallyHappensToday();

// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, 
// Bogdan, entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, 
// his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, 
// then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day 
// (the end of 14 full weeks). What is Bogdan’s final IQ?”


function soaringIQ(iq) {
    var dec = 0;
    var sum = 0;
    for(var i = 1; i <= 98; i++){
        dec = (i * 10)/1000;
        sum += dec;
    }
    iq += sum;
    console.log("Final IQ: ", iq);
}
// soaringIQ(101);

// “Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, 
// given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 
// 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, 
// you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".”

function letterGrade(grade) {
    if(grade >= 90){
        console.log("Score:", grade + ". Grade: A");
    } else if(grade < 90 && grade >= 80){
        console.log("Score:", grade + ". Grade: B");
    } else if(grade < 80 && grade >= 70){
        console.log("Score:", grade + ". Grade: C");
    } else if(grade < 70 && grade >= 60){
        console.log("Score:", grade + ". Grade: D");
    } else if(grade < 60){
        console.log("Score:", grade + ". Grade: F");
    }
}
// letterGrade(90);


// “More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, 
// and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). 
// Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .”

function moreAccurateGrade(grade){
    if(grade >= 93){
        console.log("Score:", grade + ". Grade: A");
    } else if(grade < 93 && grade >= 90){
        console.log("Score:", grade + ". Grade: A-");
    } else if(grade < 90 && grade >= 88){
        console.log("Score:", grade + ". Grade: B+");
    } else if(grade < 88 && grade >= 83){
        console.log("Score:", grade + ". Grade: B");
    } else if(grade < 83 && grade >= 80){
        console.log("Score:", grade + ". Grade: B-");
    } else if(grade < 80 && grade >= 78){
        console.log("Score:", grade + ". Grade: C+");
    } else if(grade < 78 && grade >= 73){
        console.log("Score:", grade + ". Grade: C");
    } else if(grade < 73 && grade >= 70){
        console.log("Score:", grade + ". Grade: C-");
    } else if(grade < 70 && grade >= 68){
        console.log("Score:", grade + ". Grade: D+");
    } else if(grade < 68 && grade >= 63){
        console.log("Score:", grade + ". Grade: D");
    } else if(grade < 63 && grade >= 60){
        console.log("Score:", grade + ". Grade: D-");
    } else if(grade < 60){
        console.log("Score:", grade + ". Grade: F");
    }
}
moreAccurateGrade(87);