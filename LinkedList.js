import Node from './Node.js';
export default class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append = (value) => {
        let currentNode = this.head;
        if (currentNode === null) {
            this.head = new Node(value);
        } else {
            let prevNode;
            while (currentNode !== null) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            prevNode.nextNode = new Node(value);
        }
    }

    prepend = (value) => {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size = () => {
        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head = () => {
        return this.head;
    }

    tail = () => {
        let currentNode = this.head;
        if (currentNode === null) {
            return null;
        } else {
            let prevNode;
            while (currentNode !== null) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            return prevNode;
        }
    }

    at = (index) => {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            if (currentNode === null) return null;
            currentNode = currentNode.nextNode;
        }
        
        return currentNode;
    }

    pop = () => {
        if (this.head === null) return null;

        if (this.head.nextNode === null) {
            const poppedNode = this.head;
            this.head = null;
            return poppedNode;
        }

        let currentNode = this.head;
        let prevNode;
        while (currentNode.nextNode !== null) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = null;
        return currentNode;
    }

    contains = (value) => {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }

        return false;
    }

    find = (value) => {
        let index = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }

        return null;
    }

    toString = () => {
        let currentNode = this.head;
        let string = [];
        while (currentNode !== null) {
            string.push(`( ${currentNode.value} ) -> `);
            currentNode = currentNode.nextNode;
        }
        string.push('( null )');
        console.log(string.join(""));
    }

    insertAt = (value, index) => {
        if (index < 0) return null;

        if (index === 0) {
            const newNode = new Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            let prevNode;
            for (let i = 0; i < index; i++) {
                if (currentNode === null) return null;
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            const newNode = new Node(value);
            newNode.nextNode = currentNode;
            prevNode.nextNode = newNode;
        }
    }

    removeAt = (index) => {
        if (index < 0 || this.head === null) return null;
        if (index === 0) {
            this.head = this.head.nextNode;
        } else {
            let currentNode = this.head;
            let prevNode;
            for (let i = 0; i < index; i++) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
                if (currentNode === null) return null;
            }
            prevNode.nextNode = currentNode.nextNode;
        }
    }
}