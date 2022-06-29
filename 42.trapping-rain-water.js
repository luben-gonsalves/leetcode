/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let prefixMax = [height[0]];
  let suffixMax = [height[height.length - 1]];

  for (let i = 1; i < height.length; i++) {
    if (prefixMax[i - 1] > height[i]) {
      prefixMax[i] = prefixMax[i - 1];
    } else {
      prefixMax[i] = height[i];
    }
  }

  
};
// @lc code=end
