var middleNode = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    let ptrF = head;
    let ptrS = head;
    while(ptrF && ptrF.next){
        ptrF = ptrF.next.next;
        ptrS = ptrS.next;
    }
    return ptrS
};
