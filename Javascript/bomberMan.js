/**
 * Problem: The Bomberman Game
 *
 * Bomberman lives in a grid of R rows and C columns.
 * Cells contain either a bomb ('O') or nothing ('.').
 * Bombs detonate after 3 seconds, clearing themselves and their 4 orthogonal neighbors.
 * Neighboring bombs destroyed by detonation do NOT trigger a chain reaction.
 *
 * Timeline:
 * - t = 0: Initial grid setup.
 * - t = 1: Bomberman does nothing. State == Initial grid.
 * - t = 2: Bomberman plants bombs in all empty cells. (All cells are 'O').
 * - t = 3: Bombs planted at t = 0 detonate.
 * - t = 4: Bomberman plants bombs in all empty cells. (All cells are 'O').
 * - t = 5: Bombs planted at t = 2 detonate.
 *
 * Cyclic behavior for n >= 2:
 * - If n % 2 === 0: All cells are filled with bombs ('O').
 * - If n % 4 === 3: State after first detonation (bombs at t=0 detonate).
 * - If n % 4 === 1 (and n > 1): State after second detonation (bombs at t=2 detonate).
 * - If n === 1: Exactly the initial grid.
 *
 * @param {number} n - Number of elapsed seconds
 * @param {string[]} grid - Initial grid configuration of strings
 * @returns {string[]} - Grid state after n seconds
 *
 * Time Complexity: O(R * C)
 * Space Complexity: O(R * C)
 */
function bomberMan(n, grid) {
    if (n === 1) {
        return grid;
    }

    const R = grid.length;
    const C = grid[0].length;

    // Helper: grid of all bombs
    function getFullGrid() {
        return Array.from({ length: R }, () => 'O'.repeat(C));
    }

    // Even seconds: Always completely full of bombs
    if (n % 2 === 0) {
        return getFullGrid();
    }

    // Helper: simulate detonation of `sourceGrid`
    function detonate(sourceGrid) {
        const result = Array.from({ length: R }, () => new Array(C).fill('O'));
        const directions = [
            [0, 0],   // the cell itself
            [-1, 0],  // North
            [1, 0],   // South
            [0, -1],  // West
            [0, 1]    // East
        ];

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (sourceGrid[r][c] === 'O') {
                    for (const [dr, dc] of directions) {
                        const nr = r + dr;
                        const nc = c + dc;
                        if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
                            result[nr][nc] = '.';
                        }
                    }
                }
            }
        }

        return result.map(row => row.join(''));
    }

    // State at t = 3: detonation of initial bombs
    const state3 = detonate(grid);

    if (n % 4 === 3) {
        return state3;
    }

    // State at t = 5: detonation of bombs planted at t = 2
    const state5 = detonate(state3);
    return state5;
}

// Verification Test Cases
if (require.main === module) {
    const sampleGrid = [
        ".......",
        "...O...",
        "....O..",
        ".......",
        "OO.....",
        "OO....."
    ];

    console.log("n = 1:");
    console.log(bomberMan(1, sampleGrid).join('\n'));

    console.log("\nn = 2:");
    console.log(bomberMan(2, sampleGrid).join('\n'));

    console.log("\nn = 3:");
    console.log(bomberMan(3, sampleGrid).join('\n'));

    console.log("\nn = 5:");
    console.log(bomberMan(5, sampleGrid).join('\n'));
}

module.exports = { bomberMan };
