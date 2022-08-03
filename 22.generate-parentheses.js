/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  generate([], 0, 0);
  return result;

  /**
   * @param {char[]} A
   * @param {number} left
   * @param {number} right
   * @return {string[]}
   */
  function generate(A, left, right) {
    if (A.length === 2 * n) {
      result.push(A.join(""));
      return;
    }
    if (left < n) {
      A.push("(");
      generate(A, left + 1, right);
      A.pop();
    }
    if (right < left) {
      A.push(")");
      generate(A, left, right + 1);
      A.pop();
    }
  }
};
// @lc code=end
