/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const maxDepth = (root) => {
    if (root === null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  maxDepth(root);
  return max;
};
// @lc code=end
