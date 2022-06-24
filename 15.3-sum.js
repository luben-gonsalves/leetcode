/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let currentNum = nums[i];
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      targetSum = currentNum + nums[j] + nums[k];
      if (targetSum === 0) {
        result.push([currentNum, nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (targetSum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return result;
};
// @lc code=end
