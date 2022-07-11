/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let hashMapB = new Set();

  while (headB != null) {
    hashMapB.add(headB);
    headB = headB.next;
  }

  while (headA != null) {
    if (hashMapB.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }

  return null;
};
// @lc code=end
