/*
 * @lc app=leetcode id=1332 lang=javascript
 *
 * [1332] Remove Palindromic Subsequences
 */

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  for (let [i, j] = [0, s.length - 1]; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return 2;
    }
  }
  return 1;
};
// @lc code=end
