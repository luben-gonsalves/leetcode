/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  var word = sentence.split("");

  word = [...new Set(word)];

  // alphabet has 26 letters
  if (word.length === 26) {
    return true;
  }
  return false;
};
// @lc code=end
