/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let parenthMap = {};

    for (let i = 0; i < s.length; i++) {
        parenthMap[s[i]] = (parenthMap[s[i]] || 0) + 1;
    }
    console.log(parenthMap);
};

console.log(removeInvalidParentheses("()())()")) // Output: ["()()()", "(())()"]
// console.log(removeInvalidParentheses("(a)())()")) // Output: ["(a)()()", "(a())()"]
// console.log(removeInvalidParentheses(")(")) // Output: [""]