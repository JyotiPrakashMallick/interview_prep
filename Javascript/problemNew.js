/**
 * Problem: First Duplicate Occurrence (Brute Force Approach)
 * -------------------------------------------------------------
 * Given an array of integers, find the first number that appears more than once.
 * If no duplicate elements exist, return -1.
 * 
 * Approach:
 * Compares every element at index `i` with all subsequent elements at index `j > i`.
 * 
 * Parameters:
 *   @param {number[]} inputArray - Array of integers
 * 
 * Returns:
 *   @returns {number} - The duplicate value, or -1 if all are unique
 * 
 * Complexity:
 *   - Time Complexity: O(n^2)
 *   - Space Complexity: O(1)
 * 
 * Note: See `problenNewSet.js` for the optimal O(n) approach using a HashSet.
 */
function checkDuplicateOccurence(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] === inputArray[j]) {
                return inputArray[i];
            }
        }
    }
    return -1;
}

// Example usage:
console.log(checkDuplicateOccurence([3, 1, 4, 2, 5, 1, 6])); // Output: 1
console.log(checkDuplicateOccurence([10, 20, 30]));          // Output: -1
