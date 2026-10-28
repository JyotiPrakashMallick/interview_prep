/**
 * Problem: Palindrome Verification (Iterative Reverse Loop)
 * -------------------------------------------------------------
 * Determine whether a given string reads the same forwards and backwards
 * by building the reversed string manually with a decrementing loop.
 * 
 * Approach:
 * Loop backwards from `str.length - 1` down to 0, appending each character
 * to a `reversed` string accumulator.
 * 
 * Parameters:
 *   @param {string} str - Input word or number string
 * 
 * Returns:
 *   @returns {string} - Formatted result string indicating whether it is a palindrome
 * 
 * Complexity:
 *   - Time Complexity: O(n) (or O(n^2) with immutable string concat in some engines; O(n) using two pointers)
 *   - Space Complexity: O(n)
 */
function checkPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str === reversed) {
        return str + " is a palindrome";
    } else {
        return str + " is not a palindrome";
    }
}

// Example usage:
console.log(checkPalindrome("121"));   // "121 is a palindrome"
console.log(checkPalindrome("racecar")); // "racecar is a palindrome"
console.log(checkPalindrome("123"));   // "123 is not a palindrome"
