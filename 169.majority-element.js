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
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      hashMap[nums[i]] = hashMap[nums[i]]++;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  let max = 0;
  for (let num in hashMap) {
    let potentialMax = num / hashMap[num];
    if (potentialMax > max) {
      max = potentialMax;
    }
  }
  return max;

  //need to work on better solution
};
// @lc code=end
