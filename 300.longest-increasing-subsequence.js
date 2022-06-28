/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let resultArray = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > resultArray[resultArray.length - 1]) {
      resultArray.push(nums[i]);
    } else {
      let j = binarSearch(resultArray, nums[i]);
      resultArray[j] = nums[i];
    }
  }

  return resultArray.length;
};

const binarSearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
// @lc code=end
