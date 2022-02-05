// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4. 

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
 * approach : take 2 lists at a time to merge
 */

function mergedList(a,b){
    let  list = new ListNode(-1);
    let current = list;
    while(a!==null && b!==null){
        if(a.val<b.val){
            current.next = a;
            a = a.next;
        }else{
            current.next = b;
            b = b.next;
        }
        current = current.next;
    }
    current.next = a || b;
    return list.next;
}
var mergeKLists = function(lists) {
    if(lists.length==0) return null
    while(lists.length>1){
        let a = lists.pop();
        let b = lists.pop();
        let mergedListAB = mergedList(a,b);
        lists.push(mergedListAB);
    }
    return lists[0];
};
