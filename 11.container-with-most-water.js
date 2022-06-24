/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    let width = j - i;
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * width);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxArea;
};
// @lc code=end
