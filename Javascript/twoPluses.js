/**
 * Problem: Ema's Supercomputer (Two Non-Overlapping Plus Signs)
 *
 * Given an n x m grid of characters where each cell is either 'G' (good) or 'B' (bad).
 * A valid plus sign has:
 * - Equal odd horizontal and vertical segment lengths.
 * - Center cell shared by both segments.
 * - Radius r >= 0, where length = 2r + 1 and area = 4r + 1.
 * - All occupied cells must be 'G'.
 *
 * Find two non-overlapping valid pluses such that the product of their areas is maximized.
 *
 * Constraints:
 * 2 <= n, m <= 15
 *
 * @param {string[]} grid - n x m grid of 'G' and 'B'
 * @returns {number} - Maximum product of areas of two non-overlapping pluses
 *
 * Time Complexity: O(P^2), where P is the number of valid pluses.
 * Since n, m <= 15, P <= 15 * 15 * 8 ~ 1800, P^2 comparisons run in milliseconds.
 * Space Complexity: O(P) to store all valid plus representations.
 */
function twoPluses(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // Collect all valid pluses: { r, c, radius, area, cells: Set of coordinate keys }
    const pluses = [];

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c] !== 'G') continue;

            // Radius 0 plus (single 1x1 cell)
            let radius = 0;
            const cells = new Set([`${r},${c}`]);
            pluses.push({
                r,
                c,
                area: 1,
                cells: new Set(cells)
            });

            // Expand outward while all 4 arms stay within bounds and remain 'G'
            while (
                r - (radius + 1) >= 0 &&
                r + (radius + 1) < n &&
                c - (radius + 1) >= 0 &&
                c + (radius + 1) < m &&
                grid[r - (radius + 1)][c] === 'G' &&
                grid[r + (radius + 1)][c] === 'G' &&
                grid[r][c - (radius + 1)] === 'G' &&
                grid[r][c + (radius + 1)] === 'G'
            ) {
                radius++;
                cells.add(`${r - radius},${c}`);
                cells.add(`${r + radius},${c}`);
                cells.add(`${r},${c - radius}`);
                cells.add(`${r},${c + radius}`);

                pluses.push({
                    r,
                    c,
                    area: 4 * radius + 1,
                    cells: new Set(cells)
                });
            }
        }
    }

    // Find the pair of non-overlapping pluses with maximum area product
    let maxProduct = 0;
    const numPluses = pluses.length;

    for (let i = 0; i < numPluses; i++) {
        for (let j = i + 1; j < numPluses; j++) {
            const p1 = pluses[i];
            const p2 = pluses[j];

            // Quick check: can this product beat the current max?
            if (p1.area * p2.area <= maxProduct) continue;

            // Check if p1 and p2 overlap
            let overlaps = false;
            for (const cell of p1.cells) {
                if (p2.cells.has(cell)) {
                    overlaps = true;
                    break;
                }
            }

            if (!overlaps) {
                maxProduct = Math.max(maxProduct, p1.area * p2.area);
            }
        }
    }

    return maxProduct;
}

// Verification Test Cases
if (require.main === module) {
    // Sample 0:
    // 5 6
    // GGGGGG
    // GBBBGB
    // GGGGGG
    // GGBBGB
    // GGGGGG
    const sample0 = [
        "GGGGGG",
        "GBBBGB",
        "GGGGGG",
        "GGBBGB",
        "GGGGGG"
    ];
    console.log("Sample 0:", twoPluses(sample0)); // Expected: 5

    // Sample 1:
    // 6 6
    // BGBBGB
    // GGGGGG
    // BGBBGB
    // GGGGGG
    // GGGGGG
    // BGBBGB
    const sample1 = [
        "BGBBGB",
        "GGGGGG",
        "BGBBGB",
        "GGGGGG",
        "GGGGGG",
        "BGBBGB"
    ];
    console.log("Sample 1:", twoPluses(sample1)); // Expected: 25
}

module.exports = { twoPluses };
