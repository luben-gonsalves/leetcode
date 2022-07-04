/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const res = [];
    const pCounts = countChars(p, p.length);
    const sCounts = countChars(s, p.length);
    let left = 0;
    let right = p.length - 1;
    console.log(sCounts)
    
    while (right < s.length) {
        if (sameCounts(pCounts, sCounts)) {
            res.push(left);
        }
        
        // Update counts
        sCounts[s[left]]--;
        sCounts[s[right + 1]]++;
        
        // Update window
        left++;
        right++;
    }
    
    return res;
};

// Returns a map of { char => charCount }
function countChars(str, length) {
    const counts = {};
    
    for (const char of "abcdefghijklmnopqrstuvwxyz") {
        counts[char] = 0;
    }
    
    for (let i = 0; i < length; i++) {
        counts[str[i]]++;
    }
    
    return counts;
}

// Given two counts, returns true if they all contain the same counts
function sameCounts(counts1, counts2) {
    for (const char of "abcdefghijklmnopqrstuvwxyz") {
        if (counts1[char] !== counts2[char]) {
            return false;
        }
    }
    
    return true;
}

// @lc code=end

