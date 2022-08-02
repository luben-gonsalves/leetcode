/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;
  
    let rev = 0;
    while (rev < x) {
      rev *= 10;
      rev += x%10;
      x = Math.trunc(x/10);
    }
    return rev === x || Math.trunc(rev/10) === x;
};
// @lc code=end

