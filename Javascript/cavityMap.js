/**
 * Problem: Cavity Map
 * -------------------------------------------------------------
 * You are given a square map as an n x n matrix of integer strings.
 * Each cell has a value denoting its depth.
 * 
 * A cell is called a "cavity" if and only if:
 * 1. It is NOT on the border of the map (i.e., 0 < row < n - 1 and 0 < col < n - 1).
 * 2. Each of the 4 adjacent cells sharing an edge (North, South, East, West) has a
 *    STRICTLY smaller depth.
 * 
 * Task:
 * Find all cavities on the map and replace their depth with the uppercase character 'X'.
 * 
 * Crucial Implementation Detail:
 * Cavities are determined based on the ORIGINAL map values.
 * Replacing a cell with 'X' must not affect adjacent cavity checks.
 * We can either:
 * - Read from the original `grid` while constructing or writing to a copy of the grid.
 * - Or construct an output array of character arrays / strings.
 * 
 * Parameters:
 *   @param {string[]} grid - Array of n strings, each of length n
 * 
 * Returns:
 *   @returns {string[]} - The modified grid with cavities replaced by 'X'
 * 
 * Complexity:
 *   - Time Complexity: O(n^2) where n is the grid dimension (visiting each cell once)
 *   - Space Complexity: O(n^2) to store and return the modified grid
 */
function cavityMap(grid) {
    const n = grid.length;
    // Create a mutable copy of the grid as array of character arrays
    const result = grid.map(row => row.split(''));

    // Iterate through interior cells only (exclude borders)
    for (let r = 1; r < n - 1; r++) {
        for (let c = 1; c < n - 1; c++) {
            const current = grid[r][c];
            const north = grid[r - 1][c];
            const south = grid[r + 1][c];
            const west = grid[r][c - 1];
            const east = grid[r][c + 1];

            // Must be strictly greater than all 4 adjacent neighbors
            if (
                current > north &&
                current > south &&
                current > west &&
                current > east
            ) {
                result[r][c] = 'X';
            }
        }
    }

    // Join characters back to strings
    return result.map(row => row.join(''));
}

// Example / Test Cases:
console.log("Sample 1:");
console.log(cavityMap(['989', '191', '111']));
// Expected:
// [ '989', '1X1', '111' ]

console.log("\nSample 2 (4x4):");
console.log(cavityMap([
    '1112',
    '1912',
    '1892',
    '1234'
]));
// Expected:
// [ '1112', '1X12', '18X2', '1234' ]

module.exports = cavityMap;
