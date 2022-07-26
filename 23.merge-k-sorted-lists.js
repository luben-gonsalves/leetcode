/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const newLL = [];
  if (!lists.length || lists.every((list) => !list)) return null;
  for (let list of lists) {
    while (list) {
      newLL.push(new ListNode(list.val, null));
      list = list.next;
    }
  }

  newLL.sort((a, b) => a.val - b.val);
  let head = newLL[0];
  for (let i = 0; i < newLL.length - 1; i++) {
    newLL[i].next = newLL[i + 1];
  }

  return head;
};
// @lc code=end
