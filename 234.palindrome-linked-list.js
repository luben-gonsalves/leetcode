/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let mid_node = mid(head);
  let rev = reverse(mid_node);

  while (head != null && rev != null) {
    if (head.val !== rev.val) {
      return false;
    }
    head = head.next;
    rev = rev.next;
  }
  return true;
};

var mid = function (head) {
  var slow = head;
  var fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var reverse = function (head) {
  var current = head;
  var prev;
  var next;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;

  return head;
};
// @lc code=end
