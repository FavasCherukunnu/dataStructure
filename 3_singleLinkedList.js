/*************
 SINGLE LINKED LIST
 ************/




class Node {

    data;
    next = null;

    constructor(data) {
        this.data = data;
    }
}

var head = null;
var tail = null;

//adding to end position
function addNode(data) {

    if (head === null) {
        head = new Node(data);
        tail = head;
        return;
    }

    tail.next = new Node(data);
    tail = tail.next;

}

//print the linkded list
function display() {
    if (head === null) {
        console.log('Empty');
        return;
    }
    var temp = head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

//delete node
function deleteNode(data) {
    temp = head;
    var prev = head;
    if (temp == null) {
        return;
    }

    while (temp.next !== null && temp.data != data) {
        prev = temp;
        temp = temp.next
    }

    //tail position
    if (temp.next === null) {
        if (temp.data === data) {
            //at head
            if (temp === prev) {
                temp = null;
                head = null;
            } else {
            //at tail
                prev.next = null;
                temp = null;
                tail = prev;
            }
        }
        return;
    }

    //head position
    if (prev === temp) {
        if (temp.data === data) {
            head = temp.next;
            temp = null;
        }
        return;
    }

    prev.next = temp.next;
    temp = null;

}

//insert to the next position of given data
function insertAfter(nextTo,data){
    var temp = head;
    if(temp===null){
        console.log('empty');
        return;
    }

    while(temp.next!==null && temp.data !=nextTo){
        temp = temp.next;
    }

    if(temp.data == nextTo){

        //tail
        if(temp.next===null){
            temp.next = new Node(data);
            tail = temp.next;
            return;
        }

        var forv = new Node(data);
        forv.next = temp.next;
        temp.next = forv;
        return;
    }

    console.log('No data found');

}


//reverse singlyLinkedList
function displayReverse(){

    var revHead = tail;
    var revTail = tail;
    var temp = head;
    if(temp===null){
        console.log('Empty');
        return;
    }

    while(1){

        while(temp.next!=revTail && temp.next !== null){
            temp = temp.next;
        }
        revTail.next = temp;
        revTail = revTail.next;
        if(revTail==head){
            revTail.next = null;
            head = revHead;
            tail = revTail;
            break;
        }
        temp = head;

    }


}

for (var i = 1; i <= 10; i++) {
    addNode(i);
}

// deleteNode(2)
// insertAfter(10,20)

displayReverse();
display()
