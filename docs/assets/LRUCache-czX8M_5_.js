const e=`# LRUCache

## Problem Statement

Design a data structure for an LRU (Least Recently Used) cache with a fixed capacity. It must support:
1. get(key) — return the value if the key exists, otherwise return -1. Accessing a key marks it as most recently used.
2. put(key, value) — insert or update the key-value pair. If capacity is exceeded, evict the least recently used key first.

Both operations must run in O(1) time.

## Examples

- LRUCache(2) → capacity 2
- put(1,1), put(2,2) → cache: {1:1, 2:2}
- get(1) → 1, cache: {2:2, 1:1} (1 is now most recent)
- put(3,3) → evicts key 2, cache: {1:1, 3:3}
- get(2) → -1 (evicted)

## Approach

Combine a doubly linked list with a hash map.

- Doubly linked list: most recently used node sits just after the dummy head; least recently used sits just before the dummy tail. Nodes can be removed and re-inserted at the front in O(1).
- Hash map: maps each key to its node, enabling O(1) access to any node without traversal.

On get: if key exists, remove its node from current position, re-insert at front, return value.
On put: if key exists, update value and move to front. If new key, create node, insert at front, add to map. If over capacity, remove the node just before tail (LRU), delete its key from map.

## Solution

\`\`\`js
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
        if (!this.map.has(key)) return -1;
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
                const lru = this.tail.prev;
                this._remove(lru);
                this.map.delete(lru.key);
            }
            const newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            this._addToHead(newNode);
        }
    }
}
\`\`\`

## Time Complexity

**O(1)** for both get and put — map lookup is O(1) and doubly linked list insert/remove with known node references is O(1).

## Space Complexity

**O(capacity)** — the map and list together store at most capacity entries.

## Notes

- The dummy head and tail nodes eliminate all edge-case checks for empty list or boundary positions.
- The node must store its key so that when it is evicted from the tail, we can delete its entry from the map.
- LeetCode #146.
`;export{e as default};
