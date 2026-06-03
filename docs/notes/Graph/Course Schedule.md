# Course Schedule

## Problem Statement

You are given the total number of courses numCourses (labeled 0 to numCourses - 1) and a list of prerequisite pairs. Each pair [a, b] means course a depends on course b (b must be taken before a). Determine if it is possible to finish all courses — i.e., determine if the prerequisite graph contains no cycles.

## Examples

- Input: numCourses = 4, prerequisites = [[1,0],[2,1],[3,2]]
- Output: true (the order 0 → 1 → 2 → 3 works, no cycles)

- Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
- Output: false (cycle: course 0 requires 1 and course 1 requires 0)

## Approach

DFS cycle detection on a directed graph. Build an adjacency list from the prerequisites. Use two boolean arrays:
- visited: marks nodes currently in the active DFS path (in the call stack)
- checked: marks nodes already confirmed as cycle-free

For each course, run DFS. If a node is already in the current DFS path (visited = true), a cycle is found. If it is already checked (confirmed safe), skip it. After exploring all neighbors, backtrack by unsetting visited and setting checked.

This is equivalent to looking for back edges in a directed graph.

## Solution

```js
function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    for (const [course, prereq] of prerequisites) {
        graph[course].push(prereq);
    }

    const visited = new Array(numCourses).fill(false);
    const checked = new Array(numCourses).fill(false);

    function dfs(course) {
        if (checked[course]) return true;
        if (visited[course]) return false;

        visited[course] = true;

        for (const prereq of graph[course]) {
            if (!dfs(prereq)) return false;
        }

        visited[course] = false;
        checked[course] = true;

        return true;
    }

    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) return false;
    }

    return true;
}
```

## Time Complexity

**O(V + E)** where V = numCourses and E = number of prerequisite pairs. Each node and edge is processed at most once due to the checked array short-circuiting revisits.

## Space Complexity

**O(V + E)** for the adjacency list, plus O(V) for the visited and checked arrays and the recursion stack.

## Notes

- The two-array approach is the standard DFS cycle detection for directed graphs: visited tracks the current path (detects back edges), checked avoids reprocessing already-safe nodes.
- This is essentially checking whether a topological ordering exists.
- LeetCode #207.
