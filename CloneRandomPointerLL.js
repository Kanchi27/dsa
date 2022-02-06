// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.


// With Map Implementation
// Time : O(n) , space : O(n)
var copyRandomList = function(head) {
   if(!head) return head;
    let map = new Map();
    let temp = tmp = head;
    while(temp){
        map.set(temp, new Node(temp.val));
        temp = temp.next;
    }
    
    temp = head;
    while(temp){
        map.get(temp).next = temp.next ? map.get(temp.next) : null;
        map.get(temp).random = temp.random ? map.get(temp.random) : null;
        temp = temp.next;
    }
    return map.get(tmp)
};


// Constant Space Implementation 
// Approach:

// traverse over the given list and create a new copy node for each list node, interleave the lists such that -
// change next pointer of current node to the copy node
// set the next pointer of copy node to the previous next node of current node
// Ex: 5 -> 5c -> 9 -> 9c -> 4 -> 4c -> NULL
// traverse again and set the random pointer value of each copy node
// random pointer for copy node will equal to current node's random's next (the copy node)
// finally we reset the next pointer of given list and update the next pointer value of each copy node


var copyRandomList = function(head) {
    if(!head) {
        return null;
    }
    let current = head;
    // copy all nodes at alternate postion
    while(current){
        const origNext = current.next;
        const clonedNode = new Node(current.val);
        current.next = clonedNode;
        clonedNode.next = origNext;
        current = origNext;
    }
    // copy all random pointers
    current= head;
    while(current){
        const randomClonePtr = current.random ? current.random.next : null; 
        const clonedNode= current.next;
        clonedNode.random = randomClonePtr;
        current = clonedNode.next;
    }
    //copy all next pointers
    current = head;
    const copy = head.next;
    while(current){
        const clonedNode = current.next;  // clone's position : 2nd
        current.next = clonedNode.next; // orig's next will be at 3rd position i.e. clone's next
        current = current.next;  // increment current :  current is at 3rd position
        clonedNode.next = current ? current.next : null;  // current.next : 4th position which will be clone's next
    }
    return copy;
}
