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
 approach : take 2 lists at a time to merge
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
