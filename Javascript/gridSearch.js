/**
 * Problem: The Grid Search
 * -------------------------------------------------------------
 * Given a 2D grid of digits G of size R x C, determine whether a smaller pattern
 * of digits P of size r x c exists anywhere within G as a contiguous sub-grid.
 * 
 * Grid G: array of R strings, each of length C.
 * Pattern P: array of r strings, each of length c.
 * 
 * Objective:
 * Return "YES" if pattern P exists in grid G, or "NO" otherwise.
 * 
 * Approach (2D Sliding Window Pattern Search):
 * 1. Let R = G.length, C = G[0].length.
 * 2. Let r = P.length, c = P[0].length.
 * 3. The top-left corner of pattern P can start at any row `i` from 0 to `R - r`
 *    and any column `j` from 0 to `C - c`.
 * 4. Optimization:
 *    For each row `i`, we can use `indexOf(P[0], startIndex)` to quickly locate
 *    all candidate column positions `j` where the FIRST row of P matches in G[i].
 * 5. Once the first row matches at (i, j), we verify the remaining `r - 1` rows:
 *    Check if G[i + k].slice(j, j + c) === P[k] for k = 1 to r - 1.
 * 6. If all r rows match at offset j, return "YES".
 * 7. If no matches are found after checking all valid (i, j), return "NO".
 * 
 * Parameters:
 *   @param {string[]} G - The grid of strings to search
 *   @param {string[]} P - The pattern of strings to search for
 * 
 * Returns:
 *   @returns {string} - "YES" if P exists in G, else "NO"
 * 
 * Complexity:
 *   - Time Complexity: O((R - r + 1) * (C - c + 1) * r * c) worst-case,
 *     typically O(R * C) average with `indexOf` pruning
 *   - Space Complexity: O(1) auxiliary space
 */
function gridSearch(G, P) {
    const R = G.length;
    const C = G[0].length;
    const r = P.length;
    const c = P[0].length;

    // Loop through all possible starting rows in G
    for (let i = 0; i <= R - r; i++) {
        let colIndex = G[i].indexOf(P[0]);

        // Find all occurrences of the first pattern row in G[i]
        while (colIndex !== -1 && colIndex <= C - c) {
            let fullMatch = true;

            // Verify the remaining rows of the pattern
            for (let k = 1; k < r; k++) {
                if (G[i + k].slice(colIndex, colIndex + c) !== P[k]) {
                    fullMatch = false;
                    break;
                }
            }

            if (fullMatch) {
                return "YES";
            }

            // Look for next occurrence of P[0] on the same row G[i]
            colIndex = G[i].indexOf(P[0], colIndex + 1);
        }
    }

    return "NO";
}

// Example / Test Cases:
const G1 = [
    "1234567890",
    "0987654321",
    "1111111111",
    "1111111111",
    "2222222222"
];

const P1 = [
    "876543",
    "111111",
    "111111"
];

console.log("Sample 1 Test Result:", gridSearch(G1, P1)); // Output: "YES"

const P2 = [
    "876543",
    "111111",
    "211111"
];
console.log("Sample 2 (Mismatch):", gridSearch(G1, P2)); // Output: "NO"

module.exports = gridSearch;
