import Node from "./Node.js";  
export default class LinkedList {
    constructor(start = null) {
        this.start = start;
    }

    append = (key, value) => {
        let thisNode = this.start;
        let prevNode;
        const newNode = new Node(key, value);
        if (thisNode === null) {
            this.start = newNode;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
            }
            thisNode = newNode;
            prevNode.next = thisNode;
        }
    }

    prepend = (key, value) => {
        let thisNode = this.start;
        const newNode = new Node(key, value);
        newNode.next = thisNode;
        this.start = newNode;
    }

    size = () => {
        let sum = 0;
        let thisNode = this.start;
        while (thisNode !== null) {
            sum++;
            thisNode = thisNode.next;
        }
    }

    head = () => {
        return this.start;
    }

    tail = () => {
        let thisNode = this.start;
        let prevNode;
        if (thisNode === null) {
            return thisNode;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
            }
            return prevNode;
        }
    }

    at = (index) => {
        let i = 0;
        let thisNode = this.start;
        if (thisNode === null) {
            return;
        } else {
            while (i !== index) {
                i++;
                thisNode = thisNode.next;
            }
            return thisNode;
        }
    }

    pop = () => {
        let thisNode = this.start;
        let prevNode;
        if (thisNode === null) {
            return;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
            }
        }
        prevNode.next = null;
    }

    contains = (value) => {
        let thisNode = this.start;
        let prevNode;
        if (thisNode === null) {
            return false;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
                if (prevNode.value === value) {
                    return true;
                }
            }
            return false;
        }
    }

    find = (value) => {
        let i = 0;
        let thisNode = this.start;
        let prevNode;
        if (thisNode === null) {
            return null;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
                if (prevNode.value === value) {
                    return i;
                }
                i++;
            }
            return null;
        }
    }

    insertAt = (key, value, index) => {
        const newNode = new Node(key, value);
        let thisNode = this.start;
        let prevNode;
        let i = 0;
        if (thisNode === null && index === 0) {
            this.start = newNode;
        } else if (thisNode === null) {
            return;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
                i++;
                if (i === index) {
                    newNode.next = thisNode;
                    prevNode.next = newNode;
                    return;
                }
            }
        }
    }

    removeAt = (index) => {
        let thisNode = this.start;
        let prevNode;
        let i = 0;
        if (thisNode === null) {
            return;
        } else {
            while (thisNode !== null) {
                prevNode = thisNode;
                thisNode = thisNode.next;
                i++;
                if (i === index && thisNode === null) {
                    prevNode.next = null;
                    return;
                } else if (i === index) {
                    prevNode.next = thisNode.next;
                    return;
                }
            }
        }
    }
}