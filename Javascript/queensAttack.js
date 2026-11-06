/**
 * Problem: Queen's Attack II
 * -------------------------------------------------------------
 * Given an n x n chessboard with a queen at position (r_q, c_q) and k obstacles,
 * determine how many squares the queen can attack in a single move.
 * 
 * Rules of the Queen:
 * The queen attacks along 8 directions until reaching an obstacle or the edge of the board:
 * 1. Up (North)          : (r + 1, c)
 * 2. Down (South)        : (r - 1, c)
 * 3. Right (East)        : (r, c + 1)
 * 4. Left (West)         : (r, c - 1)
 * 5. Up-Right (North-East): (r + 1, c + 1)
 * 6. Up-Left (North-West) : (r + 1, c - 1)
 * 7. Down-Right (South-East): (r - 1, c + 1)
 * 8. Down-Left (South-West) : (r - 1, c - 1)
 * 
 * Mathematical Ray-Casting Optimization:
 * Instead of simulating square-by-square (which takes O(n) per ray, failing for n = 100,000):
 * 1. Initialize the maximum unobstructed reach in all 8 directions from the queen's coordinates:
 *    - North      = n - r_q
 *    - South      = r_q - 1
 *    - East       = n - c_q
 *    - West       = c_q - 1
 *    - North-East = min(North, East)
 *    - North-West = min(North, West)
 *    - South-East = min(South, East)
 *    - South-West = min(South, West)
 * 
 * 2. For each obstacle (r_o, c_o):
 *    - Check if it lies along one of the 8 lines of sight from the queen.
 *    - If it does, update that direction's reach to `distance(queen, obstacle) - 1`
 *      if it is closer than the previously recorded distance!
 * 
 * 3. Sum the 8 direction distances to get the answer.
 * 
 * Parameters:
 *   @param {number} n - Board dimension (1 <= n <= 10^5)
 *   @param {number} k - Number of obstacles (0 <= k <= 10^5)
 *   @param {number} r_q - Queen's row position (1-based)
 *   @param {number} c_q - Queen's column position (1-based)
 *   @param {number[][]} obstacles - 2D array where each element is [r, c] of an obstacle
 * 
 * Returns:
 *   @returns {number} - Total number of squares the queen can attack
 * 
 * Complexity:
 *   - Time Complexity: O(k) single pass over the obstacles (independent of board size n!)
 *   - Space Complexity: O(1) auxiliary memory (only 8 directional variables)
 */
function queensAttack(n, k, r_q, c_q, obstacles) {
    // Initial maximum distances to the board edges in all 8 directions
    let north = n - r_q;
    let south = r_q - 1;
    let east = n - c_q;
    let west = c_q - 1;

    let northEast = Math.min(north, east);
    let northWest = Math.min(north, west);
    let southEast = Math.min(south, east);
    let southWest = Math.min(south, west);

    // Process each obstacle and prune the reach along its ray
    for (let i = 0; i < k; i++) {
        const [r_o, c_o] = obstacles[i];
        const dr = r_o - r_q;
        const dc = c_o - c_q;

        // 1. Vertical (Same column)
        if (dc === 0) {
            if (dr > 0) {
                // North
                north = Math.min(north, dr - 1);
            } else {
                // South
                south = Math.min(south, -dr - 1);
            }
        }
        // 2. Horizontal (Same row)
        else if (dr === 0) {
            if (dc > 0) {
                // East
                east = Math.min(east, dc - 1);
            } else {
                // West
                west = Math.min(west, -dc - 1);
            }
        }
        // 3. Main / Anti Diagonals (|dr| === |dc|)
        else if (Math.abs(dr) === Math.abs(dc)) {
            const dist = Math.abs(dr) - 1;

            if (dr > 0 && dc > 0) {
                // North-East
                northEast = Math.min(northEast, dist);
            } else if (dr > 0 && dc < 0) {
                // North-West
                northWest = Math.min(northWest, dist);
            } else if (dr < 0 && dc > 0) {
                // South-East
                southEast = Math.min(southEast, dist);
            } else if (dr < 0 && dc < 0) {
                // South-West
                southWest = Math.min(southWest, dist);
            }
        }
    }

    // Total attackable squares is the sum across all 8 pruned directions
    return north + south + east + west + northEast + northWest + southEast + southWest;
}

// Example / Test Cases:
console.log("8x8 Empty Board (Queen at 4,4):", queensAttack(8, 0, 4, 4, [])); 
// Output: 27 (matches standard chess problem diagram)

console.log("5x5 Board with 3 obstacles:", queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));
// Output: 10

module.exports = queensAttack;
