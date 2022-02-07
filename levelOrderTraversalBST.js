// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// eg: Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

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
 * @return {number[][]}
 */
var levelOrder = function(root) { 
    if(!root) return [];
    let result = [];
    let q = [root];
    
    while(q.length) {
        let level = [];
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            level.push(node.val);
            
            if(node.left) {
                q.push(node.left);
            }
            if(node.right) {
                q.push(node.right);
            }
        }
        result.push(level);
    }
    return result;
};
