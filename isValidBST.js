// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


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
var isValidBST = function(root) {
    // min for root will be -infinity and max will be +infinity
    return dfs(root, Number.NEGATIVE_INFINITY , Number.POSITIVE_INFINITY);
}
    function dfs(node, min, max){
        // an empty binary tree is also a valid BST
        if(!node){
            return true
        }
        // if say max <root < min , it fails above consition
        if(node.val >= max || node.val <= min){
            return false;
        }
        // left subtree and right subtree both should be valid , only then return true
        // for right subtree it should be greater than parent and less than max value
        // for left subtree, it should be less than parent and greater than min value
        return dfs(node.right,node.val,max) && dfs(node.left,min,node.val);
        
    }
