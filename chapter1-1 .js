// “Multiples of Three – but Not All”
// “Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.”

function multiplesThree (){
    for(var i = -300; i < 0; i += 3){
        if(i == -3 || i == -6){
            continue;
        }
        console.log(i);
    }
}

// multiplesThree();

// “Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.”

function multiplesFive(){
    var j = 0;
    for(var i=512; i<4096; i++){
        if(i % 5 == 0){
            console.log(i);
            j++;
        }
    }
    console.log("Total #: " + j);
}

// multiplesFive();

// “Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?”

function suckerHuge(){
    var j = 0;
    for(var i = -300000;i <= 300000;i++){
        if(i%2 != 0){
            j += i;
        }
    }
    console.log("Total Sum: " + j);
}
// suckerHuge();

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.”

function countdownFour() {
    var i=2016;
    while(i > 0){
        if(i%4 == 0){
            console.log(i);
        }
        i--;
    }
}
// countdownFour();

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).”

function flexCountdown(lowNum, highNum, mult){
    for(var i=highNum; i >= lowNum; i--){
        if(i%mult == 0){
            console.log(i);
        }
    }
}
//flexCountdown(4,20,4);

// “The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9). ”

function finalCountdown(param1, param2, param3, param4){
    for(var i=param2; i <= param3; i++){
        if(i%param1 == 0){
            if(i==param4){
                continue;
            }
            console.log(i);
        }
    }
}
// finalCountdown(4,4,20,12);