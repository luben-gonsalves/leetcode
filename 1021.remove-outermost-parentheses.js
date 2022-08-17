/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depthCount = -1; // current depth of parentheses
    let res = '';
    
    for (i = 0; i < S.length; i++) {
        // not adding parentheses at depth 0
        if (S[i] === '(') {
            depthCount += 1;
            if (depthCount > 0) {
                res += S[i];
            }
        } else {
            if (depthCount > 0) {
                res += S[i];
            }
            depthCount -= 1;
        }   
    }

    return res;
};
// @lc code=end

