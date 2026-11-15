/**
 * Problem: Fair Rations
 * -------------------------------------------------------------
 * People stand in a line; B[i] is how many loaves person i already has.
 * Every loaf you give to person i must come with a loaf to a neighbour
 * (i - 1 or i + 1). In the end everyone must have an even number of loaves.
 * Return the minimum number of loaves to hand out (as a string), or "NO".
 *
 * Approach (greedy, left to right):
 *   Walk the line. If person i has an odd count, the only way to fix them
 *   without undoing earlier work is to give one loaf to i and one to i + 1.
 *   That costs 2 loaves and flips the parity of person i + 1.
 *   If the last person is still odd at the end, there is no one left to pair
 *   with, so the answer is "NO".
 *
 * Why "NO" is easy to spot: each step adds 2 loaves in total, so the parity of
 * the total sum never changes. An odd total can never become all-even.
 *
 * Example:
 *   B = [4, 5, 6, 7]
 *   i = 1 is odd -> give to 1 and 2 -> [4, 6, 7, 7]  (2 loaves)
 *   i = 2 is odd -> give to 2 and 3 -> [4, 6, 8, 8]  (4 loaves)
 *   Answer: "4"
 *
 * Parameters:
 *   @param {number[]} B - Loaves each person starts with
 *
 * Returns:
 *   @returns {string} - Minimum loaves to distribute, or "NO"
 *
 * Complexity:
 *   - Time Complexity: O(N)
 *   - Space Complexity: O(1) extra (only a parity flag, B is not modified)
 */

function fairRations(B) {
    let loaves = 0;
    let carry = 0; // 1 if the previous person passed a loaf to this person

    for (let i = 0; i < B.length - 1; i++) {
        if ((B[i] + carry) % 2 === 1) {
            loaves += 2;
            carry = 1;
        } else {
            carry = 0;
        }
    }

    const lastIsOdd = (B[B.length - 1] + carry) % 2 === 1;
    return lastIsOdd ? "NO" : String(loaves);
}

// Example / Test Cases:
console.log("Example:", fairRations([4, 5, 6, 7]));     // 4
console.log("Sample 0:", fairRations([2, 3, 4, 5, 6])); // 4
console.log("Sample 1:", fairRations([1, 2]));          // NO

module.exports = { fairRations };
