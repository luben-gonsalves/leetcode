/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = {};

  for (let el of arr) {
    obj[el] = obj[el] ? ++obj[el] : 1;
  }
  const output = Object.values(obj);

  return output.length == new Set(output).size;
};
// @lc code=end
