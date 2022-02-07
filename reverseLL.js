/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || head.next === null) return head;
    let current = head;
    let prev = null;
    let next;
    while(current){
        next = current.next; //3
        current.next = prev; // null
        prev = current;  // 1
        current = next; // 2
    }
    return prev; 
};
