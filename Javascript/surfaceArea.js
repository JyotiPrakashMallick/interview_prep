/**
 * Problem: 3D Surface Area
 *
 * Madison's toy is constructed on an H x W 2D board with 1x1 cells.
 * Cell (i, j) contains a vertical stack of A[i][j] unit cubes (1x1x1).
 * The price of the toy is equal to its total external 3D surface area.
 *
 * Each cell (i, j) with height h = A[i][j] contributes:
 * - Top & Bottom surfaces: 2 units (if h > 0; given constraints say A[i][j] >= 1, so exactly 2 per cell).
 * - 4 Lateral faces (North, South, East, West):
 *     Exposed height along an edge = max(0, h - neighbor_height).
 *     If there is no neighbor (boundary of board), neighbor_height = 0.
 *
 * @param {number[][]} A - 2D matrix of stack heights
 * @returns {number} - Total 3D surface area
 *
 * Time Complexity: O(H * W)
 * Space Complexity: O(1)
 */
function surfaceArea(A) {
    const H = A.length;
    const W = A[0].length;
    let totalArea = 0;

    // 4 cardinal directions: [dRow, dCol]
    const directions = [
        [-1, 0], // North
        [1, 0],  // South
        [0, -1], // West
        [0, 1]   // East
    ];

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            const h = A[i][j];
            if (h > 0) {
                // Top and bottom faces
                totalArea += 2;

                // 4 lateral faces
                for (const [dr, dc] of directions) {
                    const ni = i + dr;
                    const nj = j + dc;
                    const neighborH = (ni >= 0 && ni < H && nj >= 0 && nj < W) ? A[ni][nj] : 0;
                    totalArea += Math.max(0, h - neighborH);
                }
            }
        }
    }

    return totalArea;
}

// Verification Test Cases
if (require.main === module) {
    // Sample Input 0:
    // 1 1
    // 1
    console.log("Sample 0:", surfaceArea([[1]])); // Expected: 6

    // Sample Input 1:
    // 3 3
    // 1 3 4
    // 2 2 3
    // 1 2 4
    const sample1 = [
        [1, 3, 4],
        [2, 2, 3],
        [1, 2, 4]
    ];
    console.log("Sample 1:", surfaceArea(sample1)); // Expected: 60
}

module.exports = { surfaceArea };
