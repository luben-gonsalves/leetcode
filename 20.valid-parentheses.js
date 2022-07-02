/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hashMap = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(i == 0 || stack.length === 0) {
            stack.push(s[i])
            continue;
        }
        if(hashMap[s[i]] === stack[stack.length -1]) {
            console.log(i)
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0;s
    
};
// @lc code=end

