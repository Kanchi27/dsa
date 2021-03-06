// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

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
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(0);
    let curr = dummyNode;
    let carry = 0;
        while(l1 || l2){
            let x = l1 ? l1.val : 0;
            let y = l2 ? l2.val : 0;
            let sum = x + y + carry;
            carry = Math.floor(sum/10);
            sum = sum % 10;
            curr.next = new ListNode(sum);
            l1 = l1 &&  l1.next;
            l2 = l2 && l2.next;
            curr = curr.next;
        }
        if(carry>0){
            curr.next = new ListNode(carry);
        }
    return dummyNode.next;

};
