


/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minSoFar = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minSoFar) {
      minSoFar = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minSoFar);
    }
  }

  return maxProfit;
};
// @lc code=end
