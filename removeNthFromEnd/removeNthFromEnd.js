function removeNthFromEnd(head, n) {
    if(head === null ||n===0) return head;
    
    let length = 0;
    
    function getLength(node) {
        if(!node) return length;
        length++;
        return getLength(node.next);
    }

    getLength(head);
    
    if(length === n) {
        return head.next;
    } else {
        let steps = length - n;
        let current = head;
        
    while(current!== null && steps > 1) { 
           current = current.next;
           --steps; 
    }
        
        console.log(current.val);
        current.next = current.next.next;
    }
    
    return head;
};