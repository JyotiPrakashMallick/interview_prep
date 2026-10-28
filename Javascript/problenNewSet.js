/**
 * Problem: First Duplicate Occurrence (Optimized HashSet Approach)
 * -----------------------------------------------------------------
 * Given an array of integers, find the first number whose duplicate is encountered
 * as we scan from left to right.
 * If no duplicate elements exist, return -1.
 * 
 * Approach:
 * Maintain a `Set` of previously seen numbers.
 * The moment an incoming number already exists in `hasSeen`, that number is the
 * first duplicate whose second occurrence appears earliest.
 * 
 * Parameters:
 *   @param {number[]} inputArray - Array of integers
 * 
 * Returns:
 *   @returns {number} - The first repeated integer, or -1 if none found
 * 
 * Complexity:
 *   - Time Complexity: O(n) average (O(1) Set lookups)
 *   - Space Complexity: O(n) to store seen elements
 */
function checkDuplicate(inputArray) {
    const hasSeen = new Set();
    for (const numberFromArray of inputArray) {
        if (hasSeen.has(numberFromArray)) {
            return numberFromArray;
        }
        hasSeen.add(numberFromArray);
    }
    return -1;
}

// Example usage:
console.log(checkDuplicate([3, 1, 4, 2, 5, 1, 6, 3])); // Output: 1
console.log(checkDuplicate([3, 1, 4, 2, 5, 3, 1, 6])); // Output: 3
console.log(checkDuplicate([10, 20, 30]));             // Output: -1
