/**
 * Problem: Cyclic Permutation / Digit Match Multiplication
 * -------------------------------------------------------------
 * Find all 6-digit numbers `num` (100,000 to 999,999) such that multiplying
 * `num` by 2 yields a number containing the EXACT SAME digits (an anagram/permutation of digits).
 * 
 * Example:
 * 142857 * 2 = 285714 (both contain digits 1, 2, 4, 5, 7, 8 in different orders).
 * 
 * Approach:
 * Convert both numbers to digit arrays, sort them, and verify character equality.
 * 
 * Returns:
 *   @returns {number[]} - Array of matching 6-digit numbers
 * 
 * Complexity:
 *   - Time Complexity: O(N * D log D) where N = 900,000 numbers and D = 6 digits
 *   - Space Complexity: O(1) auxiliary
 */
function validator(num1, num2) {
    const digit1 = num1.toString().split('').sort().join('');
    const digit2 = num2.toString().split('').sort().join('');
    return digit1 === digit2;
}

function logicalMultiplication() {
    const result = [];
    for (let num = 100000; num <= 999999; num++) {
        const multiplicationResult = num * 2;
        if (validator(num, multiplicationResult)) {
            result.push(num);
        }
    }
    return result;
}

// Example usage:
console.log("6-digit numbers with identical digits when multiplied by 2:", logicalMultiplication());
