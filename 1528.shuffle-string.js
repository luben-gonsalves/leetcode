/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  return indices
    .map((e, i) => ({ l: s[i], i: e }))
    .sort((a, b) => a.i - b.i)
    .map((e) => e.l)
    .join("");
};
// @lc code=end
