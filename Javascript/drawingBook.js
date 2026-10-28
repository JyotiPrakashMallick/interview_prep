/**
 * Problem: Drawing Book (Page Count)
 * -------------------------------------------------------------
 * A teacher asks a student to open a book to page `p`. A book is `n` pages long.
 * When opened, page 1 is on the right side. Every subsequent page turn flips 2 pages:
 * (2,3), (4,5), (6,7), etc.
 * 
 * The student can begin turning pages from either:
 * 1. The front of the book (starting at page 1)
 * 2. The back of the book (starting at page n)
 * 
 * Find the minimum number of page turns required to reach page `p`.
 * 
 * Parameters:
 *   @param {number} n - Total pages in the book
 *   @param {number} p - Target page number to open
 * 
 * Returns:
 *   @returns {number} - Minimum page turns needed
 * 
 * Complexity:
 *   - Time Complexity: O(1)
 *   - Space Complexity: O(1)
 */
function pageCount(n, p) {
    const traverseFromFront = Math.floor(p / 2);
    let traverseFromBack;
    if (n % 2 === 1) {
        traverseFromBack = Math.floor((n - p) / 2);
    } else {
        traverseFromBack = Math.floor((n - p + 1) / 2);
    }
    return Math.min(traverseFromFront, traverseFromBack);
}
