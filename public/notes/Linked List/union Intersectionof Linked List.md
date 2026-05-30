# union Intersectionof Linked List

## Problem Statement

Describe the problem statement for **union Intersectionof Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Union: all nodes that are either in A or B or both.
 * Intersection: all nodes that are in A and B both.
 */
/**
 * Approach: Union: We traverse to the tail of the first list and link it to the first node of the second list. All we have to do now is remove duplicates from the combined list.
 */
// UNION
function union(list1, list2) {
	if (list1.isEmpty()) {
	  return list2;
	} else if (list2.isEmpty()) {
	  return list1;
	}
  
	let start = list1.head();
  
	//Traverse the first list till the tail
	while (start.next != null) {
	  start = start.next;
	}
  
	//Link last element of first list to the first element of second list
	start.next = list2.head();
	list1.removeDuplicates();
  
	return list1;
  }
/**
 * If we did not have the care of duplicates, the runtime complexity of this algorithm would be O(m)
 where m is the size of the first list. However, because of duplicates, we need to traverse the whole union list. This increases the time complexity to O(m+n)^2 where m is the size of the first list and n is the size of the second list.
 */

 // INTERSECTION
 /**
  * Approach: 
  * Find the Lengths: Traverse both linked lists and find their lengths (len1 and len2).
  * Align the Pointers: Start traversing from the heads of both linked lists. If one list is longer than the other, move the pointer of the longer list forward by the difference in lengths.
  * Traverse Simultaneously: Now, traverse both linked lists simultaneously until you find a common node (intersection point).
  * Intersection Found: If at any point during traversal, the pointers of both linked lists point to the same node, you have found the intersection point. Return this node.
  * No Intersection: If you reach the end of both linked lists without finding a common node, it means the lists do not intersect.
  */
 // If there is only one intersection and to return that intersection node
 class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let len1 = getLength(headA);
    let len2 = getLength(headB);

    // Align the pointers
    while (len1 > len2) {
        headA = headA.next;
        len1--;
    }

    while (len2 > len1) {
        headB = headB.next;
        len2--;
    }

    // Traverse simultaneously
    while (headA !== null && headB !== null) {
        if (headA === headB) {
            return headA; // Intersection found
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null; // No intersection
}

function getLength(head) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

// if there are more than one intersecting nodes, return all those nodes
function getAllIntersectionNodes(headA, headB) {
    const intersections = [];
    
    let len1 = getLength(headA);
    let len2 = getLength(headB);

    // Align the pointers
    while (len1 > len2) {
        headA = headA.next;
        len1--;
    }

    while (len2 > len1) {
        headB = headB.next;
        len2--;
    }

    // Traverse simultaneously
    while (headA !== null && headB !== null) {
        if (headA === headB) {
            intersections.push(headA); // Intersection found
        }
        headA = headA.next;
        headB = headB.next;
    }

    return intersections;
}


/**
 * The time complexity of the getIntersectionNode function depends on the length of the two linked lists and the number of nodes before the intersection point, denoted as n and m.

	Finding Lengths:
		Traversing each linked list to find its length takes O(n) and O(m) time, respectively.
	Aligning Pointers:
		Adjusting pointers to align them at the same starting point takes O(max(n, m)) time, as we may need to move one pointer by the difference in lengths between the two lists.
	Traversing Simultaneously:
		Traversing the aligned lists simultaneously until finding the intersection node or reaching the end takes at most O(min(n, m)) time, as we are traversing at most the smaller of the two linked lists.
Therefore, the overall time complexity of the getIntersectionNode function is O(n + m), where n and m are the lengths of the two linked lists, respectively.

This time complexity arises from the need to traverse each linked list once to find its length and then traverse the aligned lists simultaneously until finding the intersection node or reaching the end. Since each step involves traversing the linked lists once or adjusting pointers based on the lengths of the lists, the time complexity is linear with respect to the lengths of the lists.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
