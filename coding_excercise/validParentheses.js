
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return true;
    if (s.length === 1) return false;
    const hashMap = {"{": "}", "[": "]", "(": ")"};
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(hashMap).includes(s[i])) {
            stack.push(s[i]);
        } else {
            let lastElement = stack.pop();
            if (hashMap[lastElement] !== s[i]) return false;
        }
    }
    return stack.length > 0 ? false : true;
};

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true
console.log(isValid("(([]){})")) // true