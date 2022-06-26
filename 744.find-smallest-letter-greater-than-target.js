/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
};
// @lc code=end
