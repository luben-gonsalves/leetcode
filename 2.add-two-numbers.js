/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let resultNode = new ListNode(0);
  let returnNode = resultNode;

  //l1 && l2
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    resultNode.next = new ListNode(sum >= 10 ? sum % 10 : sum);
    carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    resultNode = resultNode.next;
  }

  if (carry > 0) {
    resultNode.next = new ListNode(carry);
  }

  return returnNode.next;
};
// @lc code=end
