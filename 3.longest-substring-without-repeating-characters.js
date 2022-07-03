/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0;
    let max = Number.MIN_VALUE;
    let hashMap = {};

    while(j < s.length) {
        if(s[j] in hashMap) {
            i = Math.max(i,hashMap[s[j]] + 1)
        }
        hashMap[s[j]] = j;
        max = Math.max(max, j - i + 1)
        j++;
    }
    return max;
};

// @lc code=end

