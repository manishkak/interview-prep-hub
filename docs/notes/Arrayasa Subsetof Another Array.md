# Arrayasa Subsetof Another Array

## Problem Statement

Describe the problem statement for **Arrayasa Subsetof Another Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: An Array as a Subset of Another Array
 * Approach: First, convert array1 into a set setArray1. By converting array1 to a set, we optimize the lookup process when checking if elements from array2 are present in array1.
 * Next, iterate over each element (elem) in array2.
 * For each element in array2, check if it’s present in the set setArray1 (which contains all unique elements of array1).
 * If the current element (elem) is not found in setArray1, it means that elem is not present in array1. In this case, the return False indicates that array2 is not a subset of array1.
Return True if the loop completes without finding any elements in array2 that are not in array1, indicating that array2 is a subset of array1
 */

function isSubset(array1,array2){ 

  let setArray1 = new Set();

  //Inserting array1 elements in ht
  for( var i = 0; i < array1.length; i++){
    setArray1.add(array1[i]);
  }
  //Checking to see if all the elements of array2 are in the hashtable
  for(var j = 0; j < array2.length; j++){

    if (!setArray1.has(array2[j])) {
       return false;
    }
  }
  return true;
  
}

function main() {
    const input1 = [[9, 4, 7, 1, -2, 6, 5],
        [34, 19],
        [1, 2, 5, 0, 7, 4, 23],
        [-4, 6, 8, 1, 3, 14, 5, 7, 29],
        [52, 57, 23, -6, 22, -16, 78, 98, 46, 24, 19]];
    
    const input2 = [[7, 1, -2],
        [34],
        [],
        [14, -4, 29],
        [7, -6, 8, -4]];

    for (let i = 0; i < input1.length; i++) {
        console.log((i + 1) + ".\tArray1: [" + input1[i] + "]");
        console.log( "\tArray2: [" + input2[i] + "]");
        console.log("\tResult: " + isSubset((input1[i]), (input2[i])));
        console.log("-".repeat(100));
    }
}

main();
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
