/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let charMap = [];
    for (let i = 0; i < order.length; i++) {
        charMap[order[i].charCodeAt() - "a".charCodeAt()] = i;
    }

    for (let i = 1; i < words.length; i++) {
        if (compare(words[i-1], words[i], charMap) > 0) {
            return false;
        }
    }

    return true;
};

function compare(word1, word2, charMap) {
    let i = 0;
    let j = 0;
    let charCompareVal = 0;

    while (i < word1.length && j < word2.length && charCompareVal === 0) {
        charCompareVal = charMap[word1[i].charCodeAt() - "a".charCodeAt()] - charMap[word2[j].charCodeAt() - 'a'.charCodeAt()];
        i++;
        j++;
    }

    if (charCompareVal === 0) {
        return word1.length - word2.length;
    } else {
        return charCompareVal;
    }
}

console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")) // true
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")) // false
console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")) // false

var isAlienSorted2 = function(words, order) {
    for(let i = 0; i < words.length-1; i++) {
        let length = Math.max(words[i].length, words[i+1].length);
        
        for(let j = 0; j < length; j++) {
            let a = order.indexOf(words[i][j]);
            let b = order.indexOf(words[i+1][j]);
         
            if(b < a) {
                return false;
            } else if(b > a) {
                break;
            }
        }
    }
    return true;
};

console.log('isAlienSorted2:');
console.log(isAlienSorted2(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")) // true
console.log(isAlienSorted2(["word","world","row"], "worldabcefghijkmnpqstuvxyz")) // false
console.log(isAlienSorted2(["apple","app"], "abcdefghijklmnopqrstuvwxyz")) // false
