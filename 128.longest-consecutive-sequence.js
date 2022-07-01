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
  let max = 0;

  //store all the elements in the hashmap, repitation of numbers are removed
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = true;
  }

  for (let num in hashMap) {
    //find  start of consecutive sequence
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
