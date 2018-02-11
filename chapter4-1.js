// Remove Blanks - DONE
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

function removeBlanks(string){
    return string.split(/\s+/).join('');
}

console.log(removeBlanks(" Pl   ayTha  tF   u  nkyM  usi    c  "))

// String: Get Digits - DONE
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(string){
    return string.split(/[^0-9]/g).join('');
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms - DONE
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(string){
    var arr = []
    arr = string.split(" ")
    var newString = ""
    for(var i = 0; i < arr.length; i++){
        newString += arr[i][0]
    }
    return newString.toUpperCase();
}

console.log(acronym("Live from New York, it's Saturday Night!"))

// Count Non-Spaces - DONE
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function nonSpaces(string){
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == " "){
            continue;
        } else {
            count++;
        }
    }
    return count;
}
console.log(nonSpaces("Honey pie, you asefge sdeg are driving me crazy"))

// Remove Shorter Strings - DONE
// Given a string array and value (length), remove any strings shorter than length from the array.

function removeShorterString(arr, length){
    for(var i = 0, j = 0; i < arr.length; i++){
        if(arr[i].length < length){
            arr.splice(i, 1)
            i--
            j++
        }
    }
    console.log(arr)
    return arr
}

myArr = ["hello", "whatsup", "spaghetti", "hi", "one", "two"]
removeShorterString(myArr, 4)