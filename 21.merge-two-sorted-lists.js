/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
      }
      if (!l2) {
        return l1;
      }
      const val1 = l1.val;
      const val2 = l2.val;
      let mergedNode;
      if (val1 < val2) {
        mergedNode = new ListNode(val1);
        mergedNode.next = mergeTwoLists(l1.next, l2);
      } else {
        mergedNode = new ListNode(val2);
        mergedNode.next = mergeTwoLists(l2.next, l1);
      }
      return mergedNode;
};
// @lc code=end

