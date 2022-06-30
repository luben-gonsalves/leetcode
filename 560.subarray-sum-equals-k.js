/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */                                                          

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let prefixSum = pSum(nums);
  let hashMap = { 0: true };
  let count = 0;

  for (let i = 0; i < prefixSum.length; i++) {
    target = k - prefixSum[i];
    if (target in hashMap) {
      count++;
    } else {
      hashMap[prefixSum[i]] = true;
    }
  }

  return count;
};

const pSum = function (array) {
  let prefixSum = [array[0]];
  for (let i = 1; i < array.length; i++) {
    prefixSum.push(prefixSum[i - 1] + array[i]);
  }

  return prefixSum;
};
// @lc code=end
