/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        while (i < j && !(/[a-zA-Z0-9]+$/g.test(s[i]))) {
            i++;
        }
        while (i < j && !(/[a-zA-Z0-9]+$/g.test(s[j]))) {
            j--;
        }

        if (i < j && s[i++].toLowerCase() !== s[j--].toLowerCase()) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // expected: true
console.log(isPalindrome("race a car")); // expected: false
console.log(isPalindrome("madam")); // expected: true
