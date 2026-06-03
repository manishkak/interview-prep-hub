# find KClosest Elements

## Problem Statement

Given a sorted integer array arr, and two integers k and x, return the k closest integers to x in the array. The result should be sorted in ascending order. If there is a tie in distance, prefer the smaller element.

## Examples

- Input: arr = [1, 2, 3, 4, 5], k = 4, x = 3
- Output: [1, 2, 3, 4]

- Input: arr = [1, 2, 3, 4, 5], k = 4, x = -1
- Output: [1, 2, 3, 4]

## Approach

Two-pointer window shrinking. Start with left = 0 and right = arr.length - 1, giving a window of the entire array. Shrink the window by one on whichever side is farther from x, until the window has exactly k elements.

The comparison Math.abs(arr[left] - x) > Math.abs(arr[right] - x) tells us the left side is farther — increment left. Otherwise decrement right. Since the array is already sorted, the remaining window of size k is the answer.

## Solution

```js
function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {
        if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
            left++;
        } else {
            right--;
        }
    }

    return arr.slice(left, left + k);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1, 2, 3, 4]
```

## Time Complexity

**O(n - k)** for the window shrinking loop (shrinks n - k times), plus O(k) for the final slice. Total: O(n).

## Space Complexity

**O(k)** for the output slice.

## Notes

- The tie-breaking rule (prefer smaller) is handled naturally: when distances are equal, the else branch decrements right (removes the larger element), keeping the smaller one.
- The loop condition is right - left >= k (not > k) because when right - left == k, the window already has k+1 elements and still needs one more shrink.
- LeetCode #658.
