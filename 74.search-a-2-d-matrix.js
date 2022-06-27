/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;

  let row = matrix.length - 1;
  let column = 0;

  while (column < matrix[0].length && row >= 0) {
    if (matrix[row][column] > target) {
      row--;
    } else if (matrix[row][column] < target) {
      column++;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
