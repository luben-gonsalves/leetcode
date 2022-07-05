/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let maxString = ""

    for(let i = 0; i < s.length; i++) {
        let left = helper(i, i, s);
        let right = helper(i, i + 1, s);
        let currMax = left.length >= right.length ? left : right;
        maxString = maxString.length > currMax.length ? maxString : currMax;
    }
    return maxString;
    
};

const helper = function(left, right, string) {
    let curr = "";

    while(left >= 0 && right < string.length && string[left] === string[right]) {
        curr = string.substring(left, right + 1);
        left--;
        right++;
    }

    return curr;
}
// @lc code=end

