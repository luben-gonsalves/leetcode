/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var charArray = s.split("");
  var i = 0;
  var begin = 0;
  var end;
  for (i = 0; i < charArray.length; i++) {
    if (charArray[i] === " ") {
      end = i - 1;
      reverse(charArray, begin, end);
      begin = i + 1;
    }
  }

  reverse(charArray, begin, s.length - 1);

  function reverse(arr, start, end) {
    var temp;

    while (start < end) {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }

  return charArray.join("");
};
// @lc code=end
