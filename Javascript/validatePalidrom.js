/**
 * Problem: Palindrome Verification (Built-in String Methods)
 * -------------------------------------------------------------
 * Determine whether a given string reads the same forwards and backwards.
 * 
 * Approach:
 * Split the string into an array of characters, reverse the array with `reverse()`,
 * join back into a string, and check strict equality with the original.
 * 
 * Parameters:
 *   @param {string} str - Input word or number string
 * 
 * Returns:
 *   @returns {string} - Formatted result string indicating whether it is a palindrome
 * 
 * Complexity:
 *   - Time Complexity: O(n)
 *   - Space Complexity: O(n)
 */
function checkPalindrome(str) {
    const reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return str + " is a palindrome";
    } else {
        return str + " is not a palindrome";
    }
}

// Example usage:
console.log(checkPalindrome("121"));   // "121 is a palindrome"
console.log(checkPalindrome("madam")); // "madam is a palindrome"
console.log(checkPalindrome("123"));   // "123 is not a palindrome"
