import LinkedList from "./LinkedList.js";
class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.buckets = Array(capacity);
    }

    hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set = (key, value) => {
        const index = this.hash(key) % this.buckets.length;

        // if no list exists at the index, make a new one
        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
        }

        // retrieve the list at index
        const listAtIndex = this.buckets[index];

        // if the key is already in the list, update the value
        const existingKeyIndex = listAtIndex.find(key);
        if (existingKeyIndex !== null) {
            listAtIndex.at(existingKeyIndex).value = value;
        } else {
            // otherwise, append a new node to the list
            listAtIndex.append(key, value);
        }

        // if loadFactor is exceeded, grab all key value pairs,
        // double the bucket size
        // reset the hash table
        if (this.length() / this.buckets.length > this.loadFactor) {
            console.log('load factor exceeded. upping table');
            const entries = this.entries();
            this.clear();
            this.buckets = Array(this.buckets.length*2);
            entries.forEach((entry) => { this.set(entry[0], entry[1]) });
        }
    }

    get = (key) => {
        const index = this.hash(key) % this.buckets.length;

        // if no list exists at the index, return null
        if (!this.buckets[index]) return null;

        const listAtIndex = this.buckets[index];
        const existingKeyIndex = listAtIndex.find(key);
        if (existingKeyIndex !== null) {
            return listAtIndex.at(existingKeyIndex).value;
        }

        return null;   
    }

    has = (key) => {
        const index = this.hash(key) % this.buckets.length;

        if (!this.buckets[index]) return false;

        const listAtIndex = this.buckets[index];
        return listAtIndex.contains(key);
    }

    remove = (key) => {
        const index = this.hash(key) % this.buckets.length;

        if (!this.buckets[index]) return false;

        const listAtIndex = this.buckets[index];
        const existingKeyIndex = listAtIndex.find(key);
        if (existingKeyIndex !== null) {
            listAtIndex.removeAt(existingKeyIndex);
            if (listAtIndex.size() === 0) {
                this.buckets[index] = undefined;
            }
            return true;
        }

        return false;
    }

    length = () => {
        let count = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) count++;
        }
        return count;
    }

    clear = () => {
        this.buckets = Array(this.buckets.length);
    }

    keys = () => {
        const keys = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const listAtIndex = this.buckets[i];
            if (listAtIndex) {
                let currentNode = listAtIndex.head;
                while (currentNode !== null) {
                    keys.push(currentNode.key);
                    currentNode = currentNode.nextNode;
                }
            }
        }
        return keys;
    }

    values = () => {
        const values = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const listAtIndex = this.buckets[i];
            if (listAtIndex) {
                let currentNode = listAtIndex.head;
                while (currentNode !== null) {
                    values.push(currentNode.value);
                    currentNode = currentNode.nextNode;
                }
            }
        }
        return values;
    }

    entries = () => {
        const entries = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const listAtIndex = this.buckets[i];
            if (listAtIndex) {
                let currentNode = listAtIndex.head;
                while (currentNode !== null) {
                    const entry = [currentNode.key, currentNode.value];
                    entries.push(entry);
                    currentNode = currentNode.nextNode;
                }
            }
        }
        return entries;
    }

    printBuckets = () => {
        console.log(this.buckets);
    }
}

const test = new HashMap(0.75, 7);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('kite', 'blue');
test.set('moon', 'silver');
test.set('lala', 'silver');
test.set('skbiidy', 'asdf');
test.printBuckets();
