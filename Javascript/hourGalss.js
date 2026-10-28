/**
 * Problem: 2D Array - 6x6 Hourglass Sum
 * -------------------------------------------------------------
 * Given a 6x6 2D array `arr`, an hourglass is a subset of 7 values shaped like:
 * 
 *   a b c
 *     d
 *   e f g
 * 
 * An hourglass sum is the sum of an hourglass's values. There are 16 hourglasses
 * in a 6x6 array (starting indices i: 0..3, j: 0..3).
 * Calculate the hourglass sum for every hourglass in `arr`, then return the MAXIMUM hourglass sum.
 * 
 * Note: Matrix values can be negative (ranging from -9 to 9), so minimum possible sum is 7 * (-9) = -63.
 * Initialize `max` to -Infinity or -63.
 * 
 * Parameters:
 *   @param {number[][]} arr - 6x6 2D array of integers
 * 
 * Returns:
 *   @returns {number} - Maximum hourglass sum
 * 
 * Complexity:
 *   - Time Complexity: O(1) (fixed 4x4 = 16 hourglass calculations for a 6x6 matrix)
 *   - Space Complexity: O(1)
 */
function hourGlassMaxValue(arr) {
    let max = -Infinity;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            const mid = arr[i + 1][j + 1];
            const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            const sum = top + mid + bottom;

            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

// Example usage:
const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
console.log("Max Hourglass Sum:", hourGlassMaxValue(matrix)); // Output: 19
