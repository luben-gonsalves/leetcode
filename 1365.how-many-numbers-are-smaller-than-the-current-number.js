/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  var arr = [];

  for (var j = 0; j < nums.length; j++) {
    var counter = 0;
    for (var i = 0; i < nums.length; i++) {
      if (nums[j] > nums[i]) {
        counter++;
      }
    }
    arr.push(counter);
  }
  return arr;
};
// @lc code=end
