/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let map = {};
  let res = 0;
  for (let i = 0; i < jewels.length; i++) {
    map[jewels[i]] = true;
  }
  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]] === true) {
      res++;
    }
  }
  return res;
};
// @lc code=end
