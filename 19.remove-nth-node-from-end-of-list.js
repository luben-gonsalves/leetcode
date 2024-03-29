/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let root = head;
  let clone = head;
  let len = 0;

  while (clone) {
    len++;
    clone = clone.next;
  }

  let count = len - n;
  if (count === 0) return head.next;
  while (root && count > 1) {
    root = root.next;
    count--;
  }

  root.next = root.next && root.next.next;
  return head;
};
// @lc code=end
