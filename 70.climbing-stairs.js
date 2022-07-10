/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = [];

  function stepsM(N) {
    if (N === 0) return 1;
    else if (N < 0) return 0;

    if (memo[N] !== undefined) return memo[N];

    memo[N] = stepsM(N - 1) + stepsM(N - 2);
    return memo[N];
  }

  return stepsM(N);
};
// @lc code=end
