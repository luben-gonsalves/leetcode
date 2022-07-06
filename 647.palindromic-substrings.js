/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    if(s.length < 2) return 1;
    let res = 0

    for(let i = 0; i < s.length; i++) {
        res += helper(i, i, s);
        res += helper(i, i + 1, s);
    }
    return res;
    
};

const helper = function(left, right, string) {
    let res = 0;

    while(left >= 0 && right < string.length && string[left] === string[right]) {
        res ++
        left--;
        right++;
    }

    return res;
}
// @lc code=end

