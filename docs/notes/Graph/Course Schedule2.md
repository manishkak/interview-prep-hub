# Course Schedule2

## Problem Statement

You are given the total number of courses numCourses and a list of prerequisite pairs where [a, b] means course a depends on course b. Return an ordering in which all courses can be finished, or an empty array if no valid ordering exists (i.e., a cycle exists).

## Examples

- Input: numCourses = 4, prerequisites = [[1,0],[2,1],[3,2]]
- Output: [0, 1, 2, 3]

- Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
- Output: [] (cycle detected)

## Approach

Kahn's Algorithm — BFS-based topological sort using in-degree counting.

Steps:
1. Build an adjacency list and an in-degree array. For each [course, prereq], the edge goes from prereq to course, and course's in-degree is incremented.
2. Push all courses with in-degree 0 (no prerequisites) into a queue.
3. Process the queue: dequeue a course, add it to the result, and for each of its dependents, decrement their in-degree. If a dependent's in-degree reaches 0, enqueue it.
4. If the result contains all numCourses, return it. Otherwise a cycle prevented some courses from being processed — return [].

## Solution

```js
function findCourseOrder(numCourses, prerequisites) {
    const graph = {};
    const inDegree = new Array(numCourses).fill(0);
    const courseOrder = [];

    for (let [course, prereq] of prerequisites) {
        if (!graph[prereq]) graph[prereq] = [];
        graph[prereq].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let course = 0; course < numCourses; course++) {
        if (inDegree[course] === 0) queue.push(course);
    }

    while (queue.length > 0) {
        const course = queue.shift();
        courseOrder.push(course);
        const neighbors = graph[course] || [];
        for (let neighbor of neighbors) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return courseOrder.length === numCourses ? courseOrder : [];
}
```

## Time Complexity

**O(V + E)** where V = numCourses and E = number of prerequisite pairs. Each course and edge is processed exactly once.

## Space Complexity

**O(V + E)** for the adjacency list and in-degree array, plus O(V) for the queue and result array.

## Notes

- In-degree of a node = number of prerequisites remaining. When it hits 0, the course is ready to take.
- If the result array has fewer than numCourses entries after BFS, a cycle exists and prevented some nodes from ever reaching in-degree 0.
- Compared to Course Schedule (which only needs true/false), this problem needs the actual order — hence Kahn's algorithm instead of DFS.
- LeetCode #210.
