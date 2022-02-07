// Populating Right next pointers for every node, 
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.



/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

// Iterative approach
var connect = function(root) {
    if (!root) return root;
    let current = root;
    while(current){
        let dummy = new Node();  // create a dummy node
        let temp = dummy;    // take its reference as temp
        // start building linked list
        while(current){
            if(current.left){
                temp.next = current.left;    // let temp point to left node if left exists
                temp = temp.next         
            }
            if(current.right){
                temp.next = current.right;   // temp.next => rightNode of current root
                temp = temp.next;
            }
            current = current.next;
        }
        current = dummy.next;
    }
    
    return root;
};


// using queue
var connect = function(root) {
    if (!root) return root;
    let q = [root];
      
    while(q.length){
         let len = q.length;
          let dummy = new Node();
        while(len--){
            const node = q.shift();
            dummy.next = node;
            dummy = dummy.next;
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right)
            }
        }
    }
    return root;
};









// recursive solution 
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root,rightNode=null) {
    if (!root) return root;
    root.next = rightNode;
    connect(root.left, root.right);
    connect(root.right, rightNode ? rightNode.left : null);
    
    return root;
};
