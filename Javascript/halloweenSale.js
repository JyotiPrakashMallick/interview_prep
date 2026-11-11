/**
 * Problem: Halloween Sale
 * -------------------------------------------------------------
 * During the sale, the first game costs `p` dollars. Every subsequent game
 * costs `d` dollars less than the previous one, until the price would drop to
 * `m` or below — from then on every game costs exactly `m` dollars.
 * Given a budget `s`, how many games can you buy?
 *
 * Example:
 *   p = 20, d = 3, m = 6, s = 70
 *   Prices: 20, 17, 14, 11, 8, 6, 6, 6, ...
 *   20 + 17 + 14 + 11 + 8 = 70 -> 5 games
 *
 * Strategic Insight:
 * Simulate the purchases. While the wallet can afford the current price:
 *   - pay for the game and count it
 *   - next price = max(price - d, m)   (the price never goes below m)
 *
 * The loop runs at most s / m + 1 times (every game costs at least m >= 1),
 * so with s <= 10^4 it is tiny.
 *
 * Parameters:
 *   @param {number} p - Price of the first game
 *   @param {number} d - Discount from the previous game's price
 *   @param {number} m - Minimum cost of a game
 *   @param {number} s - Starting budget
 *
 * Returns:
 *   @returns {number} - Number of games you can buy
 *
 * Complexity:
 *   - Time Complexity: O(s / m) — one iteration per game bought
 *   - Space Complexity: O(1)
 */

function howManyGames(p, d, m, s) {
    let price = p;
    let games = 0;

    while (s >= price) {
        s -= price;
        games++;
        price = Math.max(price - d, m);
    }

    return games;
}

// Example / Test Cases:
console.log("Example (20, 3, 6, 70):", howManyGames(20, 3, 6, 70)); // 5
console.log("Sample 1 (20, 3, 6, 80):", howManyGames(20, 3, 6, 80)); // 6
console.log("Sample 2 (20, 3, 6, 85):", howManyGames(20, 3, 6, 85)); // 7
console.log("Too poor (20, 3, 6, 19):", howManyGames(20, 3, 6, 19)); // 0
console.log("p = m (5, 2, 5, 23):", howManyGames(5, 2, 5, 23)); // 4

module.exports = { howManyGames };
