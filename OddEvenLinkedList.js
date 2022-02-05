// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// n == number of nodes in the linked list
// 0 <= n <= 104
// -106 <= Node.val <= 106



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
var oddEvenList = function(head) {
    if(!head || head.next === null) return head;
    let oddList = new ListNode(-1);
    let evenList = new ListNode(-1);
    let evenStart = evenList;
    let oddStart = oddList;
    let current = head;
    let placeValue = 1;
     
    while(current){
        if(placeValue%2===1){
            oddList.next = current;
            oddList = oddList.next;
        }else{
            evenList.next = current;
            evenList = evenList.next;
        }
        placeValue++;
        current = current.next;
    }
    oddList.next = evenStart.next;
    evenList.next = null;
    return oddStart.next; 
};
