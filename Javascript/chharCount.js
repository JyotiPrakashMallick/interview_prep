/**
 * Problem: Character Count (Frequency Map)
 * -------------------------------------------------------------
 * Given an input string, count the frequency of each individual character
 * and return an object where keys are characters and values are their counts.
 * 
 * Examples:
 *   "banana" -> { b: 1, a: 3, n: 2 }
 *   "Jyoti"  -> { J: 1, y: 1, o: 1, t: 1, i: 1 }
 * 
 * Parameters:
 *   @param {string} str - Input text string
 * 
 * Returns:
 *   @returns {Object.<string, number>} - Frequency dictionary mapping char -> count
 * 
 * Complexity:
 *   - Time Complexity: O(n) where n = str.length
 *   - Space Complexity: O(u) where u is the number of unique characters
 */
function countCharacter(str) {
    const result = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        result[char] = (result[char] || 0) + 1;
    }

    return result;
}

// Example usage:
console.log(countCharacter("Jyoti"));
console.log(countCharacter("banana"));
