# longest Palindrome

## Problem Statement

Describe the problem statement for **longest Palindrome** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Longest Palindrome Problem
/**
 * In this problem, we are asked to form the longest possible palindrome using the characters of a string. Characters can be rearranged, and the idea is to use the characters in such a way that we maximize the length of the palindrome
 */

// Approach
/**
 * Count the occurrences of each character.
 * Pairs of characters can be placed symmetrically in a palindrome.
 * If there is at least one character with an odd count, we can place one of those characters in the center of the palindrome
 */

/**
 * Longest Palindrome: Finds the longest possible palindrome you can form using the characters of a string, where the characters can be rearranged.
 * Longest Palindromic Substring: Finds the longest contiguous substring that is a palindrome in the string, without rearranging the characters
 */

function longestPalindrome(s) {
    const charCount = {};
    
    // Step 1: Count the frequency of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let length = 0;
    let hasOdd = false;

    // Step 2: Calculate the maximum possible palindrome length
    for (let count of Object.values(charCount)) {
        // Add pairs of characters to the palindrome
        length += Math.floor(count / 2) * 2;
        
        // If there is an odd frequency character, we can place one in the middle
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    // Step 3: If there was any odd count, we can place one odd character in the center
    if (hasOdd) {
        length += 1;
    }

    return length;
}

console.log(longestPalindrome("abccccdd")); // Output: 7 ("dccaccd" or "dccbccd")


// Time Complexity:
// O(n), where n is the length of the string, since we iterate through the string once and then through the character counts.

// Space Complexity:
// O(k), where k is the number of unique characters in the string, which is stored in the character count object
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
