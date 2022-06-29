/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let obj = {};
  for (let num of nums) {
    if (num in obj) {
      obj[num].push(num);
    } else {
      obj[num] = [num];
    }
  }

  let result = [];
  for (let i = 0; i < 3; i++) {
    result = [...result, ...obj[i]];
  }

  return result;
};
// @lc code=end
