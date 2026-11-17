/**
 * Problem: Happy Ladybugs
 * -------------------------------------------------------------
 * Happy Ladybugs is a board game represented by a string `b` of length `n`.
 * - Each character in `b` is either an underscore '_' (an empty cell) or
 *   an uppercase letter 'A'-'Z' representing a ladybug of that color.
 * - A ladybug is HAPPY if and only if at least one of its adjacent neighbors
 *   (b[i - 1] or b[i + 1]) has the SAME color.
 * - In a move, any ladybug can fly to any empty cell '_'.
 * 
 * Objective:
 * Determine whether it's possible to make all ladybugs happy.
 * Return "YES" if possible, else "NO".
 * 
 * Logical Deduction & Invariant Analysis:
 * 
 * Case 1: Any ladybug color has a count of exactly 1.
 * - A solitary ladybug of color X can NEVER be happy because there is no partner
 *   to place adjacent to it anywhere on the board.
 * - Therefore, if ANY color has frequency === 1 -> return "NO".
 * 
 * Case 2: There is at least one empty space ('_').
 * - With at least one empty cell, the board acts as a permutation puzzle where
 *   you can freely rearrange ladybugs into any arbitrary grouping/order!
 * - As long as every color has count >= 2, we can simply group all identical colors
 *   together (e.g., "YYRRBB__").
 * - Therefore, if hasEmptySpace === true and no color has count === 1 -> return "YES".
 * 
 * Case 3: There are NO empty spaces (no '_').
 * - Since there are no empty cells, no ladybugs can move!
 * - The ladybugs can only be happy if they are ALREADY happy in their initial arrangement.
 * - Check every position `i`:
 *   It must satisfy `b[i] === b[i - 1]` OR `b[i] === b[i + 1]`.
 *   If all are happy -> return "YES", else return "NO".
 * 
 * Case 4: No ladybugs at all (string consists only of '_').
 * - Vacuously true: all 0 ladybugs are happy -> return "YES".
 * 
 * Parameters:
 *   @param {string} b - String representing the initial board state
 * 
 * Returns:
 *   @returns {string} - "YES" or "NO"
 * 
 * Complexity:
 *   - Time Complexity: O(n) single linear scan over string b
 *   - Space Complexity: O(1) fixed frequency array of size 26 for alphabet letters
 */
function happyLadybugs(b) {
    const counts = {};
    let hasEmpty = false;

    // Tally frequencies
    for (let i = 0; i < b.length; i++) {
        const ch = b[i];
        if (ch === '_') {
            hasEmpty = true;
        } else {
            counts[ch] = (counts[ch] || 0) + 1;
        }
    }

    // Check if any ladybug is lonely (count === 1)
    for (const color in counts) {
        if (counts[color] === 1) {
            return "NO";
        }
    }

    // If there is an empty space and no solitary colors, we can rearrange freely!
    if (hasEmpty) {
        return "YES";
    }

    // If there are NO empty spaces, check if already in happy configuration
    for (let i = 0; i < b.length; i++) {
        const sameAsLeft = i > 0 && b[i] === b[i - 1];
        const sameAsRight = i < b.length - 1 && b[i] === b[i + 1];

        if (!sameAsLeft && !sameAsRight) {
            return "NO";
        }
    }

    return "YES";
}

// Example / Test Cases:
console.log("Sample 1 (RBY_YBR):", happyLadybugs("RBY_YBR")); // "YES" (R:2, B:2, Y:2, has '_')
console.log("Sample 2 (X_Y__X):", happyLadybugs("X_Y__X"));   // "NO" (Y has count 1)
console.log("Sample 3 (__):", happyLadybugs("__"));           // "YES" (no ladybugs)
console.log("Sample 4 (B_RRBR):", happyLadybugs("B_RRBR"));   // "YES" (B:2, R:3, has '_')
console.log("Sample 5 (AABBC):", happyLadybugs("AABBC"));     // "NO" (C count 1, no '_')
console.log("Sample 6 (AABBCC):", happyLadybugs("AABBCC"));   // "YES" (already happy without '_')
console.log("Sample 7 (AABBC_C):", happyLadybugs("AABBC_C")); // "YES" (rearrange to AABBCC_)

module.exports = happyLadybugs;
