/**
 * Problem: Matrix Layer Rotation
 *
 * Given a 2D matrix of dimension m x n and a positive integer r,
 * rotate the matrix r times in an ANTI-CLOCKWISE direction.
 * Minimum of m and n is guaranteed to be even.
 *
 * Approach (Concentric Ring Extraction & 1D Array Rotation):
 * 1. Number of concentric rings (layers) = min(m, n) / 2.
 * 2. For layer `k` from 0 to numLayers - 1:
 *    - Perimeter bounds: top = k, bottom = m - 1 - k, left = k, right = n - 1 - k.
 *    - Extract elements along the perimeter in anti-clockwise order:
 *        a) Top row: (top, left) to (top, right - 1)   [going right]
 *        Wait! Check anti-clockwise direction carefully:
 *        In anti-clockwise rotation:
 *        - Top row moves LEFT: (k, right) -> (k, right - 1) -> ... -> (k, left)
 *        - Left column moves DOWN: (k, left) -> (k + 1, left) -> ... -> (bottom, left)
 *        - Bottom row moves RIGHT: (bottom, left) -> (bottom, left + 1) -> ... -> (bottom, right)
 *        - Right column moves UP: (bottom, right) -> (bottom - 1, right) -> ... -> (top, right)
 *    - If we traverse the cycle following the flow of motion:
 *        Path: (top, left) -> down to (bottom, left) -> right to (bottom, right) -> up to (top, right) -> left to (top, left + 1).
 *        If each element advances by 1 position along this path, it matches the anti-clockwise diagram!
 *    - Let the 1D ring array follow this path:
 *        Ring length L = 2 * (bottom - top) + 2 * (right - left)
 *    - Effective rotation for this ring: `rot = r % L`.
 *    - Shift elements by `rot` positions along the 1D ring.
 *    - Write shifted elements back to the 2D matrix along the same coordinates.
 *
 * @param {number[][]} matrix - 2D matrix of integers
 * @param {number} r - Number of anti-clockwise rotations
 * @returns {number[][]} - Rotated 2D matrix
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
function matrixRotation(matrix, r) {
    const m = matrix.length;
    const n = matrix[0].length;
    const numLayers = Math.min(m, n) / 2;

    const result = Array.from({ length: m }, () => new Array(n));

    for (let layer = 0; layer < numLayers; layer++) {
        const top = layer;
        const bottom = m - 1 - layer;
        const left = layer;
        const right = n - 1 - layer;

        // Collect coordinates of the layer in anti-clockwise order (following movement flow)
        const coords = [];

        // 1. Top-to-bottom along left column: from (top, left) down to (bottom, left)
        for (let row = top; row <= bottom; row++) {
            coords.push([row, left]);
        }

        // 2. Left-to-right along bottom row: from (bottom, left + 1) to (bottom, right)
        for (let col = left + 1; col <= right; col++) {
            coords.push([bottom, col]);
        }

        // 3. Bottom-to-top along right column: from (bottom - 1, right) up to (top, right)
        for (let row = bottom - 1; row >= top; row--) {
            coords.push([row, right]);
        }

        // 4. Right-to-left along top row: from (top, right - 1) down to (top, left + 1)
        for (let col = right - 1; col >= left + 1; col--) {
            coords.push([top, col]);
        }

        const L = coords.length;
        const rot = r % L;

        // Map values into rotated positions
        for (let i = 0; i < L; i++) {
            // Element at coords[i] moves forward by rot positions along the anti-clockwise path
            const newIndex = (i + rot) % L;
            const [targetR, targetC] = coords[newIndex];
            const [sourceR, sourceC] = coords[i];
            result[targetR][targetC] = matrix[sourceR][sourceC];
        }
    }

    return result;
}

// Verification Test Cases
if (require.main === module) {
    // Example from image:
    // 4 x 4 matrix, r = 2
    const start = [
        [1,  2,  3,  4],
        [12, 1,  2,  5],
        [11, 4,  3,  6],
        [10, 9,  8,  7]
    ];

    const rotated = matrixRotation(start, 2);
    console.log("After 2 rotations:");
    rotated.forEach(row => console.log(row.join(' ')));
    // Expected output:
    // 3 4 5 6
    // 2 3 4 7
    // 1 2 1 8
    // 12 11 10 9
}

module.exports = { matrixRotation };
