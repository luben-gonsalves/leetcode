/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majorityElement = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== majorityElement) {
      count--;
    } else {
      count++;
    }
    if (count === 0) {
      majorityElement = nums[i];
      count++;
    }
  }

  return majorityElement;

  //need to work on better solution
};
// @lc code=end
