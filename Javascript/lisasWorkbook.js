/**
 * Problem: Lisa's Workbook
 * -------------------------------------------------------------
 * A workbook has n chapters; chapter i has arr[i] problems numbered 1..arr[i].
 * Each page holds up to k problems, and every chapter starts on a new page.
 * Page numbers start at 1. A problem is "special" if its number within its
 * chapter equals the page number it's printed on. Count the special problems.
 *
 * Approach:
 *   Walk chapter by chapter, keeping a running page counter. For each page of a
 *   chapter, the problems on it are a contiguous range [first, last]:
 *     first = start of this page's block (1, k+1, 2k+1, ...)
 *     last  = min(first + k - 1, arr[i])
 *   The current page is special iff first <= page <= last (a range check —
 *   no need to loop over individual problems).
 *
 * Example:
 *   arr = [4, 2], k = 3
 *   Chapter 1: page 1 -> problems 1..3 (1 is on page 1 ✓)
 *              page 2 -> problem 4      (2 not in 4..4)
 *   Chapter 2: page 3 -> problems 1..2  (3 not in 1..2)
 *   Answer: 1
 *
 * Parameters:
 *   @param {number} n   - Number of chapters
 *   @param {number} k   - Max problems per page
 *   @param {number[]} arr - Problems in each chapter
 *
 * Returns:
 *   @returns {number} - Number of special problems
 *
 * Complexity:
 *   - Time Complexity: O(total pages) = O(sum(ceil(arr[i] / k)))
 *   - Space Complexity: O(1)
 */

function workbook(n, k, arr) {
    let page = 1;
    let special = 0;

    for (let i = 0; i < n; i++) {
        for (let first = 1; first <= arr[i]; first += k) {
            const last = Math.min(first + k - 1, arr[i]);
            if (page >= first && page <= last) special++;
            page++;
        }
    }

    return special;
}

// Example / Test Cases:
console.log("Example:", workbook(2, 3, [4, 2]));               // 1
console.log("Sample:", workbook(5, 3, [4, 2, 6, 1, 10]));      // 4

module.exports = { workbook };
