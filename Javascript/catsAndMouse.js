/**
 * Problem: Cats and a Mouse
 * -------------------------------------------------------------
 * Two cats and a mouse are situated at points on a 1D line.
 * Given their starting positions x (Cat A), y (Cat B), and z (Mouse C),
 * determine which cat reaches the mouse first assuming equal travel speeds.
 * 
 * - If Cat A arrives first: Return "Cat A"
 * - If Cat B arrives first: Return "Cat B"
 * - If both arrive simultaneously: The mouse escapes while they fight -> Return "Mouse C"
 * 
 * Parameters:
 *   @param {number} x - Cat A's initial coordinate
 *   @param {number} y - Cat B's initial coordinate
 *   @param {number} z - Mouse C's position
 * 
 * Returns:
 *   @returns {string} - "Cat A", "Cat B", or "Mouse C"
 * 
 * Complexity:
 *   - Time Complexity: O(1)
 *   - Space Complexity: O(1)
 */
function catAndMouse(x, y, z) {
    const distA = Math.abs(z - x);
    const distB = Math.abs(z - y);

    if (distA === distB) {
        return "Mouse C";
    } else if (distA > distB) {
        return "Cat B";
    } else {
        return "Cat A";
    }
}
