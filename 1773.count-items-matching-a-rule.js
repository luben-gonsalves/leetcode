/*
 * @lc app=leetcode id=1773 lang=javascript
 *
 * [1773] Count Items Matching a Rule
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; ++i) {
    if (ruleKey === "type") {
      if (ruleValue === items[i][0]) count++;
    } else if (ruleKey === "color") {
      if (ruleValue === items[i][1]) count++;
    } else {
      if (ruleValue === items[i][2]) count++;
    }
  }
  return count;
};
// @lc code=end
