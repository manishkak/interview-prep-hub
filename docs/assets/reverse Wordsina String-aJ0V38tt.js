const e=`# reverse Wordsina String

## Problem Statement

Describe the problem statement for **reverse Wordsina String** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/** PROBLEM->\r
 * Given a sentence, reverse the order of its words without affecting the order of letters within the given word.\r
 * Constraints:\r
 * 		The sentence contains English uppercase and lowercase letters, digits, and spaces\r
 * 		1 ≤ sentence.length ≤ 10^4\r
 * 		The order of the letters within a word is not to be reversed\r
 * NOTE:\r
 * The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, should only have a single space separating each word. Do not include any extra spaces.\r
 * EXAMPLE:\r
 * input string: reverse this string\r
 * output string: string this reverse\r
*/\r
\r
/** SOLUTION->\r
 * Reverse the entire string\r
 * Start iterating over the reversed string \r
 * 		using two pointers, start and end, \r
 * 		initially set at index 0\r
 * While iterating over the string, \r
 * 		when end points to a space, \r
 * 		reverse the word pointed by start and end-1\r
 * Once the word has been reversed, \r
 * 		update the start and end to the start index of the next word\r
 * Repeat the process until the entire string is iterated and return the string\r
 */\r
\r
/**\r
 * TC: Since the array is traversed twice, the time complexity of this solution is O(n+n) = O(n), where n is the length of the string\r
 * SC: The space complexity of this solution is O(n), since, at the start of the algorithm, we copy it into a list of characters to overcome the issue of strings being immutable in JavaScript.\r
 */\r
\r
/** \r
1. Reversing the entire sentence:\r
\r
	- We first reverse the complete string. \r
	- This step places the words in their correct positions relative to each other, although each word is backward.\r
\r
2. Reversing each word:\r
\r
	- Iterate through the reversed sentence:\r
		- Use two pointers, start and end, both initially set to 0. The first pointer, start, marks the beginning of a word, and the second pointer, end, finds the end of a word.\r
		- When the end of a word is found (either a space or the end of the string), we reverse the characters in that word in place.\r
		- After reversing, we update start to point to the beginning of the next word.\r
		- Now, we'll repeat this process for the next word. At the end of all iterations, we get the reversed words in the string.\r
		- We repeat this process for all words in the string.\r
*/\r
\r
// Clean and simple solution-\r
function reverseWords(s) {\r
  return s\r
    .trim()                // remove leading/trailing spaces\r
    .split(/\\s+/)          // split by one or more spaces (regex)\r
    .reverse()             // reverse the array of words\r
    .join(' ');            // join back with a single space\r
}\r
/*\r
Step-by-step Approach (Interview-style)\r
Trim leading and trailing spaces. O(n)\r
Split the string by spaces to get words.    O(n)\r
Filter out any empty strings (from multiple spaces).\r
Reverse the list of words.  O(n)\r
Join them back together with a single space. O(n) ... Total = O(n)\r
SC: Each operation creates a new array/string copy\r
✅ O(n) extra space\r
*/\r
\r
console.log(reverseWords("  hello   world  ")); // "world hello"\r
console.log(reverseWords("the sky is blue"));   // "blue is sky the"\r
\r
\r
// strRev reverses a substring within a string from start to end\r
function strRev(str, start, end) {\r
    // Convert the string to an array to manipulate characters\r
    let arr = str.split('');\r
    while (start < end) {\r
        let temp = arr[start];\r
        arr[start] = arr[end];\r
        arr[end] = temp;\r
        start++;\r
        end--;\r
    }\r
    // Convert the array back to a string\r
    return arr.join('');\r
}\r
\r
function reverseWords(sentence) {\r
    // Remove extra spaces and strip leading/trailing spaces\r
    sentence = sentence.replace(/\\s+/g, " ").trim(); // At this point " hello world " → "hello world"\r
\r
    // Reverse the whole sentence first\r
    sentence = strRev(sentence, 0, sentence.length - 1);   // Reverse the entire string\r
    // Using the strRev helper function above, at this point "hello world" → "dlrow olleh"\r
    // Now the words are in reverse order, but each word is backwards\r
\r
    // Iterate through the sentence to find and reverse each word\r
    for (let start = 0, end = 0; end <= sentence.length; ++end) {\r
        if (end === sentence.length || sentence[end] === ' ') {\r
            // Reverse the current word\r
            sentence = strRev(sentence, start, end - 1);\r
            // Move the "start" pointer to the start of the next word\r
            start = end + 1;\r
        }\r
    }\r
\r
    return sentence;\r
}\r
/*\r
Time Complexity:\r
Cleaning spaces → O(n)\r
Reverse entire string → O(n)\r
Reverse each word → O(n)\r
✅ Total = O(n)\r
💾 Space Complexity\r
strRev() converts string → array → string multiple times\r
❌ O(n²) in worst case (since each strRev call copies strings repeatedly)\r
*/\r
\r
\r
// Driver code\r
let stringsToReverse = [\r
    "Hello World",\r
    "a   string   with   multiple   spaces",\r
    "Case Sensitive Test 1234",\r
    "a 1 b 2 c 3 d 4 e 5",\r
    "     trailing spaces",\r
    "case test interesting an is this"\r
];\r
\r
stringsToReverse.forEach((str, index) => {\r
    console.log(\`\${index + 1}.\\tOriginal string: '\${str}'\`);\r
    console.log(\`\\tReversed string: '\${reverseWords(str)}'\`);\r
    console.log('-'.repeat(100));\r
});\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};
