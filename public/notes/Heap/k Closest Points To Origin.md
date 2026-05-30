# k Closest Points To Origin

## Problem Statement

Describe the problem statement for **k Closest Points To Origin** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// k closest points to origin

https://medium.com/p/5ad2e1d48bd7

class Solution {
    public int[][] kClosest(int[][] points, int k) {
        
        int [][] ans =  new int[k][2];
        int distances[] = new int[points.length];
        
        for (int i=0; i< points.length; i++)
        {
            distances[i] = points[i][0] * points[i][0] + points[i][1] * points[i][1];     
        }
        
        Arrays.sort(distances);
        int max = distances[k-1];
        
        System.out.println(max);
      int count =0;
            for(int j =0 ; j<distances.length; j++)
            {
                int temp = points[j][0] * points[j][0] + points[j][1] * points[j][1]; 
                if(temp <= max)
                {
                    ans[count][0] =points[j][0];
                    ans[count][1] = points[j][1];
                    count++;
                }
            }
            
        
        
        return ans;
        
        
    }
}
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
