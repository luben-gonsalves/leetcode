/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let map = {};
  for (let i of nums) {
    map[i] ? map[i]++ : (map[i] = 1);
  }

  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i] - k]) {
      pairs += map[nums[i] - k];
    }
  }

  return pairs;
};
// @lc code=end
