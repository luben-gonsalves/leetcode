/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    if (str in hashMap) {
      hashMap[str].push(strs[i]);
    } else {
      hashMap[str] = [strs[i]];
    }
  }

  for (let anagrams in hashMap) {
    result.push(hashMap[anagrams]);
  }

  return result;
};
// @lc code=end
