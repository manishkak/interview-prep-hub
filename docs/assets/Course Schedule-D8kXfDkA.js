const e=`# Course Schedule

## Problem Statement

Describe the problem statement for **Course Schedule** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Course Schedule\r
/**\r
 * Problem Statement: You are given the number of courses (numCourses) and a list of prerequisite pairs where each pair [a, b] indicates that course 'a' depends on course 'b'. Your task is to determine if it is possible to finish all courses given these prerequisites.\r
 */\r
/*\r
To solve this problem, we can use graph traversal techniques such as Depth-First Search (DFS) or Kahn's Algorithm for Topological Sorting. The idea is to represent the courses and their prerequisites as a directed graph and then check for cycles in the graph. If there are cycles, it means that some courses depend on each other in a way that makes it impossible to complete all courses.\r
DFS Approach\r
Steps:\r
- Build a graph using an adjacency list to represent the courses and their prerequisites.\r
- Use a DFS traversal to explore each course. Maintain a visited set to track the state of each course (unvisited, visiting, visited).\r
- If we encounter a course that is currently being visited (i.e., in the recursion stack), it indicates a cycle, and we return false.\r
- If we can traverse all courses without finding a cycle, we return true.\r
*/\r
function canFinish(numCourses, prerequisites) {\r
    // Build adjacency list\r
    const graph = Array.from({ length: numCourses }, () => []);\r
    for (const [course, prereq] of prerequisites) {\r
        graph[course].push(prereq);\r
    }\r
\r
    const visited = new Array(numCourses).fill(false); // tracks nodes in current DFS path\r
    const checked = new Array(numCourses).fill(false); // tracks nodes already confirmed acyclic\r
\r
    // DFS to check for cycles\r
    function dfs(course) {\r
        if (checked[course]) return true; // already checked, no cycle\r
        if (visited[course]) return false; // cycle detected\r
\r
        visited[course] = true; // mark current node in DFS path\r
\r
        for (const prereq of graph[course]) {\r
            if (!dfs(prereq)) return false; // cycle found in prerequisites\r
        }\r
\r
        visited[course] = false; // backtrack\r
        checked[course] = true;   // mark as safe\r
\r
        return true; // no cycles in this path\r
    }\r
\r
    // Check every course\r
    for (let course = 0; course < numCourses; course++) {\r
        if (!dfs(course)) {\r
            return false; // cycle detected, can't finish all courses\r
        }\r
    }\r
\r
    return true; // no cycles, all courses can be finished\r
}\r
\r
// Example usage:\r
const numCourses = 4;\r
const prerequisites = [[1, 0], [2, 1], [3, 2]];\r
console.log(canFinishCourses(numCourses, prerequisites)); // Output: true\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
