/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // O(log n) Time Complexity
  // Use modified binary search to find lowest number index
  // Then, use regular binary search either to left or right of min depending on certain conditions

  if (nums.length === 0 || !nums) return -1;

  let left = 0,
    right = nums.length - 1;

  // Modified binary search to find lowest num. While loop breaks out once left = right, smallest num is found
  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  let min = left;
  left = 0;
  right = nums.length - 1;

  // Now decide whether to search to left or right of min
  if (target >= nums[min] && target <= nums[right]) {
    left = min;
  } else {
    right = min - 1;
  }

  // Regular binary search
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return nums[middle] === target ? middle : -1;
};
// @lc code=end
