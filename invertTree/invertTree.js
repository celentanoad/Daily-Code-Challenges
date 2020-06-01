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
 * @return {TreeNode}
 */
function invertTree(root) {
    let holder;
    if (root) {
        holder = root.right;
        root.right = root.left;
        root.left = holder;
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};