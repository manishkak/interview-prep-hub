# Course Schedule

## Problem Statement

Describe the problem statement for **Course Schedule** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Course Schedule
/**
 * Problem Statement: You are given the number of courses (numCourses) and a list of prerequisite pairs where each pair [a, b] indicates that course 'a' depends on course 'b'. Your task is to determine if it is possible to finish all courses given these prerequisites.
 */
/*
To solve this problem, we can use graph traversal techniques such as Depth-First Search (DFS) or Kahn's Algorithm for Topological Sorting. The idea is to represent the courses and their prerequisites as a directed graph and then check for cycles in the graph. If there are cycles, it means that some courses depend on each other in a way that makes it impossible to complete all courses.
DFS Approach
Steps:
- Build a graph using an adjacency list to represent the courses and their prerequisites.
- Use a DFS traversal to explore each course. Maintain a visited set to track the state of each course (unvisited, visiting, visited).
- If we encounter a course that is currently being visited (i.e., in the recursion stack), it indicates a cycle, and we return false.
- If we can traverse all courses without finding a cycle, we return true.
*/
function canFinish(numCourses, prerequisites) {
    // Build adjacency list
    const graph = Array.from({ length: numCourses }, () => []);
    for (const [course, prereq] of prerequisites) {
        graph[course].push(prereq);
    }

    const visited = new Array(numCourses).fill(false); // tracks nodes in current DFS path
    const checked = new Array(numCourses).fill(false); // tracks nodes already confirmed acyclic

    // DFS to check for cycles
    function dfs(course) {
        if (checked[course]) return true; // already checked, no cycle
        if (visited[course]) return false; // cycle detected

        visited[course] = true; // mark current node in DFS path

        for (const prereq of graph[course]) {
            if (!dfs(prereq)) return false; // cycle found in prerequisites
        }

        visited[course] = false; // backtrack
        checked[course] = true;   // mark as safe

        return true; // no cycles in this path
    }

    // Check every course
    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) {
            return false; // cycle detected, can't finish all courses
        }
    }

    return true; // no cycles, all courses can be finished
}

// Example usage:
const numCourses = 4;
const prerequisites = [[1, 0], [2, 1], [3, 2]];
console.log(canFinishCourses(numCourses, prerequisites)); // Output: true

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
