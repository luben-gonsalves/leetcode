/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      left = mid;
      right = mid;
      while (nums[left - 1] === target) {
        left--;
      }
      while (nums[right + 1] === target) {
        right++;
      }
      return [left, right];
    } else if (target < nums[mid]) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};
// @lc code=end
