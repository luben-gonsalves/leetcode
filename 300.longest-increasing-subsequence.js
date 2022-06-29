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

//  Initialize an array resultArray which contains the first element of nums.

//  Iterate through the input, starting from the second element. For each element num:

//  If num is greater than any element in resultArray, then add num to resultArray.
//  Otherwise, perform a binary search in resultArray to find the smallest element that is greater than or equal to num. Replace that element with num.
//  Return the length of resultArray

var lengthOfLIS = function (nums) {
  let resultArray = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > resultArray[resultArray.length - 1]) {
      resultArray.push(nums[i]);
    } else {
      let j = binarSearch(resultArray, nums[i]);
      resultArray[j] = nums[i];
    }
    console.log(resultArray);
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
