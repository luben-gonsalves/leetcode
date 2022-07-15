/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return isSym(root.left, root.right);
};

function isSym(left, right) {
  if (left === null || right === null) return left === right;
  if (left.val !== right.val) return false;
  return isSym(left.left, right.right) && isSym(left.right, right.left);
}
// @lc code=end
