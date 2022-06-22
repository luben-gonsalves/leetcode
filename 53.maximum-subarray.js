/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxCurrent = (maxSoFar = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxSoFar = Math.max(maxCurrent, maxSoFar);
  }
  return maxSoFar;
};
// @lc code=end
