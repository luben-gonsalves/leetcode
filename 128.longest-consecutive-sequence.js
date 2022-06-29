/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] in hashMap) {
      hashMap[nums[i]]++;
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  let max = 0;

  for (let num in hashMap) {
    if (hashMap.hasOwnProperty(parseInt(num - 1)) === false) {
      let currentMax = 1;
      let nextNum = parseInt(num) + 1;

      while (nextNum in hashMap) {
        currentMax++;
        nextNum++;
      }

      max = Math.max(max, currentMax);
    }
  }

  return max;
};
// @lc code=end
