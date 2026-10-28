/**
 * Problem: Bracket Combinations (Catalan Numbers)
 * -------------------------------------------------------------
 * Given an integer `num` >= 0 representing the number of pairs of parentheses,
 * determine how many combinations of well-formed (balanced) brackets can be formed.
 * 
 * Examples:
 * - num = 0 -> 1 ("")
 * - num = 1 -> 1 ("()")
 * - num = 2 -> 2 ("()()", "(())")
 * - num = 3 -> 5 ("((()))", "(()())", "(())()", "()(())", "()()()")
 * 
 * Mathematical Pattern:
 * The number of valid bracket combinations corresponds to the n-th Catalan Number:
 *   C(n) = sum( C(i) * C(n - 1 - i) ) for i from 0 to n - 1
 * or directly:
 *   C(n) = (2n)! / ((n + 1)! * n!)
 * 
 * Parameters:
 *   @param {number} num - Number of pairs of brackets
 * 
 * Returns:
 *   @returns {number} - Total count of valid combinations
 * 
 * Complexity:
 *   - Time Complexity: O(4^n / n^(3/2)) with pure recursion; O(n^2) with memoization / DP
 *   - Space Complexity: O(n) call stack depth
 */
function BracketCombinations(num) { 
    if (num === 0) {
        return 1;
    }
    let count = 0;
    for (let i = 0; i < num; i++) {
        count += BracketCombinations(i) * BracketCombinations(num - 1 - i);
    }
    return count;
}

// Example usage:
const numPairs = 3;
console.log(`Bracket combinations for ${numPairs} pairs:`, BracketCombinations(numPairs)); // Output: 5
