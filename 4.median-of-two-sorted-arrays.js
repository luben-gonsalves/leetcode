/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let res = nums1.concat(nums2);
  res.sort((a, b) => a - b);
  if (res.length % 2 === 1) {
    return res[Math.floor(res.length / 2)];
  } else {
    let mid1 = res.length / 2 - 1;
    let mid2 = res.length / 2;
    return (res[mid1] + res[mid2]) / 2;
  }
};
// @lc code=end
