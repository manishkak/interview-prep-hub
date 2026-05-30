const e=`# LRUCache

## Problem Statement

Describe the problem statement for **LRUCache** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
### Problem Statement\r
/**\r
 * The Least Recently Used (LRU) cache problem defines the behavior of a fixed-size cache that stores key–value pairs and evicts entries based on recent usage.\r
\r
The cache has a maximum capacity. It supports two operations:\r
\r
1. **get(key)**\r
   * Returns the value associated with the key if it exists in the cache.\r
   * If the key is not present, it returns \`-1\`.\r
   * Accessing a key marks it as the most recently used.\r
\r
2. **put(key, value)**\r
   * Inserts a key–value pair into the cache.\r
   * If the key already exists, its value is updated and it becomes the most recently used.\r
   * If inserting a new key causes the cache to exceed its capacity, the least recently used key is removed.\r
\r
- “Least recently used” means the entry that has not been accessed (via \`get\` or \`put\`) for the longest time.\r
- The goal of the problem is to design this cache so that both \`get\` and \`put\` operations run in constant time, O(1).\r
 */\r
\r
// Approach\r
\r
/* We can use a combination of a "doubly linked list" and a "hash map" to achieve O(1) time complexity for both \`get\` and \`put\` operations.\r
    1. **Doubly Linked List**:\r
        - Each node will store a key-value pair.\r
        - The most recently used node will be moved to the head of the list.\r
        - The least recently used node will be at the tail of the list.\r
    2. **Hash Map**:\r
        - The hash map will store key-node pairs, allowing O(1) access to any node in the doubly linked list.\r
*/\r
\r
// Steps\r
\r
/*\r
1. **Initialization**:\r
   - Create a head and a tail (both dummy nodes) for the doubly linked list to facilitate easy addition and removal of nodes.\r
   - Create a hash map to store key-node pairs.\r
   - Define the capacity of the LRU cache.\r
2. **Get Operation**:\r
   - Check if the key exists in the hash map.\r
   - If it exists, move the corresponding node to the head of the list and return its value.\r
   - If it does not exist, return \`-1\`.\r
3. **Put Operation**:\r
   - Check if the key already exists in the hash map.\r
   - If it exists, update the node's value and move it to the head of the list.\r
   - If it does not exist, create a new node and add it to the head of the list.\r
   - If the cache exceeds its capacity, remove the node at the tail of the list and delete its entry from the hash map.\r
*/\r
\r
// ### Implementation\r
\r
// Here's the JavaScript implementation:\r
\r
\r
class ListNode {\r
    constructor(key, value) {\r
        this.key = key;\r
        this.value = value;\r
        this.prev = null;\r
        this.next = null;\r
    }\r
}\r
\r
class LRUCache {\r
    constructor(capacity) {\r
        this.capacity = capacity;\r
        this.map = new Map();\r
        this.head = new ListNode(null, null);\r
        this.tail = new ListNode(null, null);\r
        this.head.next = this.tail;\r
        this.tail.prev = this.head;\r
    }\r
\r
    _remove(node) {\r
        node.prev.next = node.next;\r
        node.next.prev = node.prev;\r
    }\r
\r
    _addToHead(node) {\r
        node.next = this.head.next;\r
        node.prev = this.head;\r
        this.head.next.prev = node;\r
        this.head.next = node;\r
    }\r
\r
    get(key) {\r
        if (!this.map.has(key)) {\r
            return -1;\r
        }\r
        const node = this.map.get(key);\r
        this._remove(node);\r
        this._addToHead(node);\r
        return node.value;\r
    }\r
\r
    put(key, value) {\r
        if (this.map.has(key)) {\r
            const node = this.map.get(key);\r
            node.value = value;\r
            this._remove(node);\r
            this._addToHead(node);\r
        } else {\r
            if (this.map.size === this.capacity) {\r
                const tailNode = this.tail.prev;\r
                this._remove(tailNode);\r
                this.map.delete(tailNode.key);\r
            }\r
            const newNode = new ListNode(key, value);\r
            this.map.set(key, newNode);\r
            this._addToHead(newNode);\r
        }\r
    }\r
}\r
\r
\r
// ### Dry Run\r
\r
// Let's do a dry run with a capacity of 2 and a series of operations:\r
\r
\r
let cache = new LRUCache(2); // Capacity is 2\r
cache.put(1, 1); // Cache is {1=1}\r
cache.put(2, 2); // Cache is {1=1, 2=2}\r
cache.get(1);    // Returns 1, Cache is {2=2, 1=1}\r
cache.put(3, 3); // Evicts key 2, Cache is {1=1, 3=3}\r
cache.get(2);    // Returns -1 (not found)\r
cache.put(4, 4); // Evicts key 1, Cache is {3=3, 4=4}\r
cache.get(1);    // Returns -1 (not found)\r
cache.get(3);    // Returns 3, Cache is {4=4, 3=3}\r
cache.get(4);    // Returns 4, Cache is {3=3, 4=4}\r
\r
\r
// ### Time Complexity\r
\r
// Get Operation**: O(1) because both accessing the hash map and updating the linked list take constant time.\r
// Put Operation**: O(1) for the same reasons as the get operation.\r
\r
// ### Space Complexity\r
\r
// Space Complexity**: O(capacity), where capacity is the number of elements the cache can hold. The space complexity is due to the hash map and the doubly linked list, each storing up to capacity elements.
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
