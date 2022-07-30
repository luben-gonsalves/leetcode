/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = new Map(); //store n,freq
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let res = 0;
  for (const [k, v] of map) {
    res += parseInt((map.get(k) * (map.get(k) - 1)) / 2);
  }
  return res;
};
// @lc code=end
