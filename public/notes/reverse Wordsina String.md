# reverse Wordsina String

## Problem Statement

Describe the problem statement for **reverse Wordsina String** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/** PROBLEM->
 * Given a sentence, reverse the order of its words without affecting the order of letters within the given word.
 * Constraints:
 * 		The sentence contains English uppercase and lowercase letters, digits, and spaces
 * 		1 ≤ sentence.length ≤ 10^4
 * 		The order of the letters within a word is not to be reversed
 * NOTE:
 * The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, should only have a single space separating each word. Do not include any extra spaces.
 * EXAMPLE:
 * input string: reverse this string
 * output string: string this reverse
*/

/** SOLUTION->
 * Reverse the entire string
 * Start iterating over the reversed string 
 * 		using two pointers, start and end, 
 * 		initially set at index 0
 * While iterating over the string, 
 * 		when end points to a space, 
 * 		reverse the word pointed by start and end-1
 * Once the word has been reversed, 
 * 		update the start and end to the start index of the next word
 * Repeat the process until the entire string is iterated and return the string
 */

/**
 * TC: Since the array is traversed twice, the time complexity of this solution is O(n+n) = O(n), where n is the length of the string
 * SC: The space complexity of this solution is O(n), since, at the start of the algorithm, we copy it into a list of characters to overcome the issue of strings being immutable in JavaScript.
 */

/** 
1. Reversing the entire sentence:

	- We first reverse the complete string. 
	- This step places the words in their correct positions relative to each other, although each word is backward.

2. Reversing each word:

	- Iterate through the reversed sentence:
		- Use two pointers, start and end, both initially set to 0. The first pointer, start, marks the beginning of a word, and the second pointer, end, finds the end of a word.
		- When the end of a word is found (either a space or the end of the string), we reverse the characters in that word in place.
		- After reversing, we update start to point to the beginning of the next word.
		- Now, we'll repeat this process for the next word. At the end of all iterations, we get the reversed words in the string.
		- We repeat this process for all words in the string.
*/

// Clean and simple solution-
function reverseWords(s) {
  return s
    .trim()                // remove leading/trailing spaces
    .split(/\s+/)          // split by one or more spaces (regex)
    .reverse()             // reverse the array of words
    .join(' ');            // join back with a single space
}
/*
Step-by-step Approach (Interview-style)
Trim leading and trailing spaces. O(n)
Split the string by spaces to get words.    O(n)
Filter out any empty strings (from multiple spaces).
Reverse the list of words.  O(n)
Join them back together with a single space. O(n) ... Total = O(n)
SC: Each operation creates a new array/string copy
✅ O(n) extra space
*/

console.log(reverseWords("  hello   world  ")); // "world hello"
console.log(reverseWords("the sky is blue"));   // "blue is sky the"


// strRev reverses a substring within a string from start to end
function strRev(str, start, end) {
    // Convert the string to an array to manipulate characters
    let arr = str.split('');
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    // Convert the array back to a string
    return arr.join('');
}

function reverseWords(sentence) {
    // Remove extra spaces and strip leading/trailing spaces
    sentence = sentence.replace(/\s+/g, " ").trim(); // At this point " hello world " → "hello world"

    // Reverse the whole sentence first
    sentence = strRev(sentence, 0, sentence.length - 1);   // Reverse the entire string
    // Using the strRev helper function above, at this point "hello world" → "dlrow olleh"
    // Now the words are in reverse order, but each word is backwards

    // Iterate through the sentence to find and reverse each word
    for (let start = 0, end = 0; end <= sentence.length; ++end) {
        if (end === sentence.length || sentence[end] === ' ') {
            // Reverse the current word
            sentence = strRev(sentence, start, end - 1);
            // Move the "start" pointer to the start of the next word
            start = end + 1;
        }
    }

    return sentence;
}
/*
Time Complexity:
Cleaning spaces → O(n)
Reverse entire string → O(n)
Reverse each word → O(n)
✅ Total = O(n)
💾 Space Complexity
strRev() converts string → array → string multiple times
❌ O(n²) in worst case (since each strRev call copies strings repeatedly)
*/


// Driver code
let stringsToReverse = [
    "Hello World",
    "a   string   with   multiple   spaces",
    "Case Sensitive Test 1234",
    "a 1 b 2 c 3 d 4 e 5",
    "     trailing spaces",
    "case test interesting an is this"
];

stringsToReverse.forEach((str, index) => {
    console.log(`${index + 1}.\tOriginal string: '${str}'`);
    console.log(`\tReversed string: '${reverseWords(str)}'`);
    console.log('-'.repeat(100));
});

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
