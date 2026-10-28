/**
 * Problem: Reverse an Array / String
 * -------------------------------------------------------------
 * Given an array (or string), reverse its elements without using the built-in
 * `Array.prototype.reverse()` method.
 * 
 * Iterative Backwards Traversal:
 * Start from the last element (index = length - 1) down to index 0,
 * pushing each element into a new result container.
 * 
 * Parameters:
 *   @param {any[]} inputArray - Array of elements to reverse
 * 
 * Returns:
 *   @returns {any[]} - New reversed array
 * 
 * Complexity:
 *   - Time Complexity: O(n)
 *   - Space Complexity: O(n) for new array (or O(1) auxiliary if in-place two-pointer swap)
 */
function reverseArray(inputArray) {
    const result = [];
    for (let j = inputArray.length - 1; j >= 0; j--) {
        result.push(inputArray[j]);
    }
    return result;
}

// Example usage:
console.log(reverseArray([1, 2, 4, 6, 7])); // [7, 6, 4, 2, 1]
