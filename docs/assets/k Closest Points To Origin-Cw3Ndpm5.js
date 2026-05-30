const n=`# k Closest Points To Origin

## Problem Statement

Describe the problem statement for **k Closest Points To Origin** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// k closest points to origin\r
\r
https://medium.com/p/5ad2e1d48bd7\r
\r
class Solution {\r
    public int[][] kClosest(int[][] points, int k) {\r
        \r
        int [][] ans =  new int[k][2];\r
        int distances[] = new int[points.length];\r
        \r
        for (int i=0; i< points.length; i++)\r
        {\r
            distances[i] = points[i][0] * points[i][0] + points[i][1] * points[i][1];     \r
        }\r
        \r
        Arrays.sort(distances);\r
        int max = distances[k-1];\r
        \r
        System.out.println(max);\r
      int count =0;\r
            for(int j =0 ; j<distances.length; j++)\r
            {\r
                int temp = points[j][0] * points[j][0] + points[j][1] * points[j][1]; \r
                if(temp <= max)\r
                {\r
                    ans[count][0] =points[j][0];\r
                    ans[count][1] = points[j][1];\r
                    count++;\r
                }\r
            }\r
            \r
        \r
        \r
        return ans;\r
        \r
        \r
    }\r
}
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};
