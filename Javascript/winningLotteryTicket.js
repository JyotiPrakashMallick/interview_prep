/**
 * Problem: Winning Lottery Ticket
 *
 * A winning pair of tickets is defined as two distinct tickets whose concatenation
 * contains all digits from '0' to '9' at least once.
 *
 * Key Insights & Bitmask Reduction:
 * 1. For each ticket, only the presence/absence of each digit '0' through '9' matters.
 * 2. We can encode each ticket as a 10-bit integer mask (0 to 1023):
 *      mask = (1 << d_0) | (1 << d_1) | ...
 * 3. Two tickets with masks `m1` and `m2` form a winning pair if and only if:
 *      (m1 | m2) === (1 << 10) - 1 === 1023 (0x3FF).
 * 4. Since there are only 2^10 = 1024 possible bitmasks, we can precompute the frequency
 *    of each mask in O(N * length_i) time:
 *      maskCounts[1024]
 * 5. Then we count winning pairs across all pairs of masks (m1, m2):
 *      - If m1 < m2 and (m1 | m2) === 1023:
 *          pairs += maskCounts[m1] * maskCounts[m2]
 *      - If m1 === m2 and (m1 | m2) === 1023 (i.e. m1 === 1023):
 *          pairs += maskCounts[1023] * (maskCounts[1023] - 1) / 2
 *
 * Time Complexity:
 * - O(Total Characters) to convert all strings into bitmasks.
 * - O(1024^2) = ~524,000 operations to check all pairs of masks.
 * - For N <= 10^6 and sum of lengths <= 10^6, this runs in < 60 ms!
 *
 * Space Complexity:
 * - O(1024) = O(1) auxiliary space for the mask frequency array.
 *
 * @param {string[]} tickets - Array of lottery ticket strings
 * @returns {number} - Total number of winning ticket pairs
 */
function winningLotteryTicket(tickets) {
    const maskCounts = new Array(1024).fill(0);
    const TARGET_MASK = 1023; // (1 << 10) - 1, all 10 digits present

    // 1. Convert each ticket to a bitmask and accumulate frequencies
    for (const ticket of tickets) {
        let mask = 0;
        for (let i = 0; i < ticket.length; i++) {
            mask |= (1 << (ticket.charCodeAt(i) - 48)); // '0' is char code 48
        }
        maskCounts[mask]++;
    }

    let winningPairs = 0;

    // 2. Count winning pairs across all 1024 masks
    for (let m1 = 0; m1 < 1024; m1++) {
        if (maskCounts[m1] === 0) continue;

        for (let m2 = m1; m2 < 1024; m2++) {
            if (maskCounts[m2] === 0) continue;

            if ((m1 | m2) === TARGET_MASK) {
                if (m1 === m2) {
                    // Combinations of 2 distinct tickets with the same full mask (1023)
                    winningPairs += (maskCounts[m1] * (maskCounts[m1] - 1)) / 2;
                } else {
                    winningPairs += maskCounts[m1] * maskCounts[m2];
                }
            }
        }
    }

    return winningPairs;
}

// Verification Test Cases
if (require.main === module) {
    // Sample Input 0:
    // 5
    // 129300455
    // 5559948277
    // 012334556
    // 56789
    // 123456879
    const sampleTickets = [
        "129300455",
        "5559948277",
        "012334556",
        "56789",
        "123456879"
    ];
    console.log("Sample 0:", winningLotteryTicket(sampleTickets)); // Expected: 5

    // Minimal pairs test:
    // "01234", "56789" -> forms 1 winning pair
    console.log("2 tickets (0-4 & 5-9):", winningLotteryTicket(["01234", "56789"])); // Expected: 1
}

module.exports = { winningLotteryTicket };
