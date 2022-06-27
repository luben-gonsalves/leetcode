/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    //check if left is sorted or right is sorted
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[left];
};
// @lc code=end
