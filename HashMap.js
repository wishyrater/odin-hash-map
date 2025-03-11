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

        this.buckets[index] = { "key": key, "value": value, "next": null };
    }

    printBuckets = () => {
        console.log(this.buckets);
    }
}

const test = new HashMap(0.75, 16);

test.set('oliver', 'green');
test.printBuckets();
