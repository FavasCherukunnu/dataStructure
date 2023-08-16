class Node {

    data = null;
    next = null;
    prev = null;

    constructor(data) {
        this.data = data;
    }

}

var head = null, tail = null;

//add to node
function addToNode(data) {
    if (head === null) {
        head = new Node(data);
        tail = head;
        return;
    }

    var dat = new Node(data);
    dat.prev = tail;
    tail.next = dat;
    tail = tail.next;
}

//display
function display() {

    if (head === null) {
        console.log('Empty');
        return;
    }

    var temp = head;

    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }

}

//reversly display
function displayReverse() {
    if (head === null) {
        console.log('Empty');
        return;
    }

    var temp = tail;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.prev;
    }
}

//delete data 
function deleteNode(data) {

    temp = head;

    if (temp === null) {
        console.log('Empty');
        return;
    }

    while (temp.next !== null && temp.data != data) {
        temp = temp.next;
    }

    if (temp.data == data) {

        //tail
        if (temp.next === null) {
            tail = tail.prev;
            tail.next = null;
            return;
        }

        //head
        if (temp == head) {
            head = head.next;
            head.prev = null;
            return;
        }

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp = null;
        return;

    }

    console.log('No data found');

}

//insert after the given data
function insertAfter(nextTo, data) {
    if (head === null) {
        console.log('Empty');
        return;
    }

    temp = head;

    while (temp.next != null && temp.data != nextTo) {
        temp = temp.next;
    }

    if (temp.data == nextTo) {

        var dat = new Node(data);
        //tail
        if (temp.next === null) {
            tail.next = dat;
            dat.prev = tail;
            tail = dat;
            return;
        }

        //head
        if (temp == head) {
            dat.prev = head;
            dat.next = head.next;
            head.next.prev = dat;
            head.next = dat;
            return;
        }

        dat.next = temp.next;
        dat.prev = temp;
        temp.next.prev = dat;
        temp.next = dat;
        return;

    }

    console.log('No data found');

}

//insert before the given data
function insertBefore(prevTo, data) {
    if (head === null) {
        console.log('Empty');
        return;
    }

    temp = head;

    while (temp.next != null && temp.data != prevTo) {
        temp = temp.next;
    }

    if (temp.data == prevTo) {

        var dat = new Node(data);
        //tail
        if (temp.next === null) {
            dat.next = tail;
            dat.prev = tail.prev;
            tail.prev.next = dat;
            tail.prev = dat;
            return;
        }

        //head
        if (temp == head) {
            dat.prev = null;
            dat.next = head;
            head.prev = dat;
            head = dat;
            return;
        }

        dat.next = temp;
        dat.prev = temp.prev;
        temp.prev.next = dat;
        temp.prev = dat;
        return;

    }

    console.log('No data found');

}

//remove adjuscent duplicate data
function removeAdjuscentDupe(){

    var temp = head, selectedElement;;
    

    if(head===null){
        console.log('Empty');
        return;
    }

    while(temp.next != null){
        selectedElement = temp;
        temp = temp.next;

        while(selectedElement.data==temp.data && temp != tail){
            temp = temp.next;
        }

        if(temp != tail && selectedElement.data == tail.data){
            
        }

        temp.prev = selectedElement;
        selectedElement.next = temp;

    }


}

addToNode(1)
addToNode(1)
addToNode(1)
addToNode(2)
addToNode(3)
addToNode(3)
addToNode(3)
addToNode(5)
addToNode(6)
addToNode(7)
addToNode(7)

insertBefore(5, 13);

removeAdjuscentDupe();

display();
