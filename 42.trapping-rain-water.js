/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (a) {
  let n = a.length;
  if (n == 0) return 0;
  let left = Array(n).fill(0); // left[i]: height of tallest bar from 0 till i
  let right = Array(n).fill(0); // right[i]: height of tallest bar from i till n - 1
  left[0] = a[0];
  right[n - 1] = a[n - 1];
  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], a[i]); // fill left array of tallest bar from start
  for (let i = n - 2; ~i; i--) right[i] = Math.max(right[i + 1], a[i]); // fill right array of tallest bar from end
  let res = 0;
  for (let i = 0; i < n; i++) res += Math.min(left[i], right[i]) - a[i]; // add each index water
  return res;
};
// @lc code=end
