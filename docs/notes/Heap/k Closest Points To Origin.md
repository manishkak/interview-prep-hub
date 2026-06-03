# k Closest Points To Origin

## Problem Statement

Given an array of points where points[i] = [xi, yi] and an integer k, return the k closest points to the origin (0, 0). The distance from a point to the origin is the Euclidean distance: sqrt(x^2 + y^2). You may return the answer in any order.

## Examples

- Input: points = [[1,3],[-2,2]], k = 1
- Output: [[-2,2]]
- Explanation: Distance of [1,3] = sqrt(10), distance of [-2,2] = sqrt(8). [-2,2] is closer.

- Input: points = [[3,3],[5,-1],[-2,4]], k = 2
- Output: [[3,3],[-2,4]]

## Approach

Sort by squared Euclidean distance (x^2 + y^2) — the square root is not needed since it is monotonically increasing and does not change the ordering.

Sort the points array by their squared distance and return the first k elements.

Alternatively, use a max-heap of size k: for each point, compute its distance, push into the heap, and if the heap exceeds size k, pop the farthest point. The heap retains the k closest.

The sort approach is simpler to write and is O(n log n). The heap approach is O(n log k), which is better when k is much smaller than n.

## Solution

```js
function kClosest(points, k) {
    points.sort((a, b) => {
        const distA = a[0] * a[0] + a[1] * a[1];
        const distB = b[0] * b[0] + b[1] * b[1];
        return distA - distB;
    });

    return points.slice(0, k);
}

console.log(kClosest([[1,3],[-2,2]], 1));          // [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));   // [[3,3],[-2,4]]
```

## Time Complexity

**O(n log n)** for the sort. If using a max-heap of size k instead: O(n log k).

## Space Complexity

**O(k)** for the output slice. The sort is in-place so no extra space beyond the output.

## Notes

- Comparing squared distances (x^2 + y^2) avoids the sqrt call and is sufficient for ordering.
- For large n and small k, the max-heap approach (O(n log k)) outperforms sorting (O(n log n)).
- LeetCode #973.
