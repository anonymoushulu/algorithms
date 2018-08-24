function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

function LinkList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

LinkList.prototype.append = function (value) {
    let node = new Node(value);

    if(this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this._length++;
    return node;
}
LinkList.prototype.prepend = function (value) {
    let node = new Node(value);
    if (this._length){
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
    } else {
        this.head = node;
        this.head = node;
    }
    this._length++;
    return node;
};

LinkList.prototype.delete = function (value) {
    let length = this._length,
        count = 1,
        message = 'node does not exist',
        currentNode = this.head,
        deletedNum = 0;
    if (length === 0){
        throw new Error(message);
    }
    while (count < length) {
        currentNode = currentNode.next;
        count++;
        if (value === currentNode.data){
            let deleteNodePrevious = currentNode.previous;
            let deleteNode = currentNode;
            let deleteNodeNext = currentNode.next;

            deleteNodePrevious.next = deleteNodeNext;
            deleteNodeNext.previous = deleteNode.previous;
            deleteNode = null;

            deletedNum++;
            this._length--;
        }
    }
    if (this.head.data === value){
        let secondNode = this.head.next;
        secondNode.previous = null;
        this.head = secondNode;
        deletedNum++;
        this._length--;
    }
    if (this.tail.data === value){
        let secondTailNode = this.tail.previous;
        secondTailNode.next = null;
        this.tail = secondTailNode;
        deletedNum++;
        this._length--;
    }
    return deletedNum;
};

let linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);

linkList.delete(1);
console.log(linkList)