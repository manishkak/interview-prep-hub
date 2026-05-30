# LRUCache

## Problem Statement

Describe the problem statement for **LRUCache** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
### Problem Statement
/**
 * The Least Recently Used (LRU) cache problem defines the behavior of a fixed-size cache that stores key–value pairs and evicts entries based on recent usage.

The cache has a maximum capacity. It supports two operations:

1. **get(key)**
   * Returns the value associated with the key if it exists in the cache.
   * If the key is not present, it returns `-1`.
   * Accessing a key marks it as the most recently used.

2. **put(key, value)**
   * Inserts a key–value pair into the cache.
   * If the key already exists, its value is updated and it becomes the most recently used.
   * If inserting a new key causes the cache to exceed its capacity, the least recently used key is removed.

- “Least recently used” means the entry that has not been accessed (via `get` or `put`) for the longest time.
- The goal of the problem is to design this cache so that both `get` and `put` operations run in constant time, O(1).
 */

// Approach

/* We can use a combination of a "doubly linked list" and a "hash map" to achieve O(1) time complexity for both `get` and `put` operations.
    1. **Doubly Linked List**:
        - Each node will store a key-value pair.
        - The most recently used node will be moved to the head of the list.
        - The least recently used node will be at the tail of the list.
    2. **Hash Map**:
        - The hash map will store key-node pairs, allowing O(1) access to any node in the doubly linked list.
*/

// Steps

/*
1. **Initialization**:
   - Create a head and a tail (both dummy nodes) for the doubly linked list to facilitate easy addition and removal of nodes.
   - Create a hash map to store key-node pairs.
   - Define the capacity of the LRU cache.
2. **Get Operation**:
   - Check if the key exists in the hash map.
   - If it exists, move the corresponding node to the head of the list and return its value.
   - If it does not exist, return `-1`.
3. **Put Operation**:
   - Check if the key already exists in the hash map.
   - If it exists, update the node's value and move it to the head of the list.
   - If it does not exist, create a new node and add it to the head of the list.
   - If the cache exceeds its capacity, remove the node at the tail of the list and delete its entry from the hash map.
*/

// ### Implementation

// Here's the JavaScript implementation:


class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(null, null);
        this.tail = new ListNode(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _addToHead(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        const node = this.map.get(key);
        this._remove(node);
        this._addToHead(node);
        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this._remove(node);
            this._addToHead(node);
        } else {
            if (this.map.size === this.capacity) {
                const tailNode = this.tail.prev;
                this._remove(tailNode);
                this.map.delete(tailNode.key);
            }
            const newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            this._addToHead(newNode);
        }
    }
}


// ### Dry Run

// Let's do a dry run with a capacity of 2 and a series of operations:


let cache = new LRUCache(2); // Capacity is 2
cache.put(1, 1); // Cache is {1=1}
cache.put(2, 2); // Cache is {1=1, 2=2}
cache.get(1);    // Returns 1, Cache is {2=2, 1=1}
cache.put(3, 3); // Evicts key 2, Cache is {1=1, 3=3}
cache.get(2);    // Returns -1 (not found)
cache.put(4, 4); // Evicts key 1, Cache is {3=3, 4=4}
cache.get(1);    // Returns -1 (not found)
cache.get(3);    // Returns 3, Cache is {4=4, 3=3}
cache.get(4);    // Returns 4, Cache is {3=3, 4=4}


// ### Time Complexity

// Get Operation**: O(1) because both accessing the hash map and updating the linked list take constant time.
// Put Operation**: O(1) for the same reasons as the get operation.

// ### Space Complexity

// Space Complexity**: O(capacity), where capacity is the number of elements the cache can hold. The space complexity is due to the hash map and the doubly linked list, each storing up to capacity elements.
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
