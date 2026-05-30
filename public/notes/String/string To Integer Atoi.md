# string To Integer Atoi

## Problem Statement

Describe the problem statement for **string To Integer Atoi** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// string to integer atoi

// The **String to Integer (atoi)** problem requires converting a string into an integer, following the rules similar to the `atoi` function in C.

// ### Problem Statement:
// Implement the function `myAtoi(string s)` which converts a string into an integer. The function should handle different edge cases and constraints, including leading/trailing whitespaces, optional sign (`+` or `-`), invalid characters, and integer overflow/underflow.

// ### Rules:
/* 1. Discard leading whitespace characters.
2. Check for an optional sign (`+` or `-`).
3. Read the digits and convert them into an integer.
4. Ignore any non-digit characters after the number.
5. If no valid conversion is possible, return 0.
6. Handle integer overflow/underflow:
   - If the number is less than `-2^31`, return `-2^31` (`-2147483648`).
   - If the number is greater than `2^31 - 1`, return `2^31 - 1` (`2147483647`).
*/

// ### Approach:
/*1. **Trim leading whitespaces**.
2. **Check for sign**: If the first non-whitespace character is `+` or `-`, set a variable to remember the sign.
3. **Parse digits**: Iterate through the characters, convert them to integers, and stop when encountering a non-digit character.
4. **Handle overflow/underflow**: Compare the result to the bounds (`INT_MAX` and `INT_MIN`) and return the appropriate value if the bounds are exceeded.
*/

// ### JavaScript Code:

function myAtoi(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let i = 0, sign = 1, result = 0;
    const n = s.length;

    // Step 1: Discard leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: Check if the next character is a sign
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Process the digits and stop at any non-digit character
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // Step 4: Handle overflow and underflow
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    // Step 5: Return the final result with the correct sign
    return result * sign;
}


// ### Explanation:
/*1. **Trimming Whitespace**: We start by discarding all leading whitespace characters (`while (s[i] === ' ')`).
2. **Handling the Sign**: If the first non-whitespace character is `-` or `+`, we set the `sign` variable accordingly.
3. **Parsing Digits**: Using a `while` loop, we convert each character to its corresponding digit and add it to the result. We stop as soon as a non-digit character is encountered.
4. **Overflow/Underflow Check**: We compare the result at every step to ensure it doesn't exceed the bounds of a 32-bit signed integer. If it does, we return `INT_MAX` or `INT_MIN`.
5. **Returning the Final Value**: The result is multiplied by the sign and returned.
*/

// ### Example Walkthrough:

// ```js
// Input: s = "   -42"
// ```
/*
1. **Step 1**: Discard leading spaces. The string becomes `"-42"`.
2. **Step 2**: The sign is `-`, so `sign = -1`.
3. **Step 3**: Process the digits:
   - First digit: `4`, so `result = 4`.
   - Second digit: `2`, so `result = 42`.
4. **Step 5**: The final result is `-42`.

### Time and Space Complexity:
- **Time Complexity**: **O(n)**, where `n` is the length of the input string. We traverse the string once.
- **Space Complexity**: **O(1)**, since we only use a few extra variables.

This solution efficiently converts a string to an integer following the rules of the `atoi` function.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
