/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    hare = nums[nums[hare]];
    tortoise = nums[tortoise];
  } while (tortoise !== hare);

  tortoise = nums[0];

  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise;
};
// @lc code=end
