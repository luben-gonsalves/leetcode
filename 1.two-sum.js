/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let requiredNum = target - nums[i];
    if (requiredNum in hashMap) {
      return [hashMap[requiredNum], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};
// @lc code=end
