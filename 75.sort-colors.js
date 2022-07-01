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
  let start = 0;
  let end = nums.length - 1;
  let curr = 0;

  while (curr <= end) {
    if (nums[curr] === 0) {
      [nums[start], nums[curr]] = [nums[curr], nums[start]];
      start++;
      curr++;
    } else if (nums[curr] === 2) {
      // dont increase current because swapping end might contain 0
      [nums[end], nums[curr]] = [nums[curr], nums[end]];
      end--;
    } else {
      curr++;
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// @lc code=end
