// String: Reverse - DONE
// Implement reverseString(str) that, given string, returns that string with characters reversed. 
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverseString(str){
    var newStr = ""
    for(var i = str.length-1, j = 0; i >= 0; i--,j++){
        newStr += str[i]
    }
    console.log(newStr)
    return newStr
}
reverseString("erutaerc")


// Remove Even-Length Strings - DONE
// Build a standalone function to remove strings of even lengths from a given array. 
// For array containing ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], 
// change that same array to ["Nope!","Its","Chris","."].

function removeEvenLengthStrings(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length % 2 == 0){
            arr.splice(i, 1)
            i--
        }
    }
    console.log(arr)
    return arr
}

myArr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]
removeEvenLengthStrings(myArr)

// Integer to Roman Numerals - DONE
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. 
// In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. 
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

function intToRoman(int){
    var romanNum = ""
    if(int > 999){
        var thousandth = Math.floor((int/1000)%10)
        console.log(thousandth)
    }
    if(int > 99){
        var hundredth = Math.floor((int/100)%10)
        console.log(hundredth)
    }
    if(int > 9){
        var tenth = Math.floor((int/10)%10)
        console.log(tenth)
    }
    var ones = int%10
    console.log(ones)
    switch(thousandth){
        case 4:
            romanNum += "MMMM"
            break
        case 3:
            romanNum += "MMM"
            break
        case 2:
            romanNum += "MM"
            break
        case 1:
            romanNum += "M"
            break
        default:
            break
    }
    switch(hundredth){
        case 9:
            romanNum += "CM"
            break
        case 8:
            romanNum += "DCCC"
            break
        case 7:
            romanNum += "DCC"
            break
        case 6:
            romanNum += "DC"
            break
        case 5:
            romanNum += "D"
            break
        case 4:
            romanNum += "CD"
            break
        case 3:
            romanNum += "CCC"
            break
        case 2:
            romanNum += "CC"
            break
        case 1:
            romanNum += "C"
            break
        default:
            break
    }
    switch(tenth){
        case 9:
            romanNum += "XC"
            break
        case 8:
            romanNum += "LXXX"
            break
        case 7:
            romanNum += "LXX"
            break
        case 6:
            romanNum += "LX"
            break
        case 5:
            romanNum += "L"
            break
        case 4:
            romanNum += "XL"
            break
        case 3:
            romanNum += "XXX"
            break
        case 2:
            romanNum += "XX"
            break
        case 1:
            romanNum += "X"
            break
        default:
            break
    }
    switch(ones){
        case 9:
            romanNum += "IX"
            break
        case 8:
            romanNum += "VIII"
            break
        case 7:
            romanNum += "VII"
            break
        case 6:
            romanNum += "VI"
            break
        case 5:
            romanNum += "V"
            break
        case 4:
            romanNum += "IV"
            break
        case 3:
            romanNum += "III"
            break
        case 2:
            romanNum += "II"
            break
        case 1:
            romanNum += "I"
            break
        default:
            break
    }
    console.log(romanNum)
    return romanNum
}

intToRoman(609)

// Roman Numerals to Integer

// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. 
// Comprising 30 bronze gears, its wooden frame features 2000 characters. 
// Given a string containing a Roman numeral representation of a positive integer, return the integer. 
// Remember that III is 3, DCIX is 609 and MXDII is 1492.

function romanToInt(){
    
}



