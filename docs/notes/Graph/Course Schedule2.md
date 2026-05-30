# Course Schedule2

## Problem Statement

Describe the problem statement for **Course Schedule2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Course Schedule 2
/**
 * Problem Statement: You are given the number of courses (numCourses) and a list of prerequisite pairs where each pair [a, b] indicates that course 'a' depends on course 'b'. Your task is to determine an order in which you can finish all courses given these prerequisites. If it's not possible to finish all courses, return an empty array.
 */
function findCourseOrder(numCourses, prerequisites) {
    const graph = {};
    const inDegree = new Array(numCourses).fill(0);
    const courseOrder = [];
    // Build the graph and in-degree array
    for (let [course, prereq] of prerequisites) {
        if (!graph[prereq]) {
            graph[prereq] = [];
        }
        graph[prereq].push(course);
        inDegree[course]++;
    }
    const queue = [];
    // Enqueue courses with no prerequisites
    for (let course = 0; course < numCourses; course++) {
        if (inDegree[course] === 0) {
            queue.push(course);
        }
    }
    while (queue.length > 0) {
        const course = queue.shift();
        courseOrder.push(course);
        const neighbors = graph[course] || [];
        for (let neighbor of neighbors) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    // If we were able to include all courses in the order, return it; otherwise, return an empty array
    return courseOrder.length === numCourses ? courseOrder : [];
}
// Example usage:
const numCourses = 4;
const prerequisites = [[1, 0], [2, 1], [3, 2]];
console.log(findCourseOrder(numCourses, prerequisites)); // Output: [0, 1, 2, 3]
/*
Time Complexity:
O(V + E):
V is the number of courses (vertices).
E is the number of prerequisite pairs (edges).
Each course and prerequisite is processed exactly once.
Space Complexity:
O(V + E):
The space used by the graph and in-degree array.
The queue and course order array in the worst-case scenario.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
