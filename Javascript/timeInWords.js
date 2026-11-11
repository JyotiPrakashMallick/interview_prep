/**
 * Problem: The Time in Words
 * -------------------------------------------------------------
 * Convert a time (h:m) into words:
 *   5:00 -> five o' clock
 *   5:01 -> one minute past five
 *   5:10 -> ten minutes past five
 *   5:15 -> quarter past five
 *   5:30 -> half past five
 *   5:40 -> twenty minutes to six
 *   5:45 -> quarter to six
 *   5:47 -> thirteen minutes to six
 *   5:28 -> twenty eight minutes past five
 *
 * Rules:
 *   - m === 0          -> "<hour> o' clock"   (note the space after the apostrophe)
 *   - 1 <= m <= 30     -> "... past <hour>"
 *   - m > 30           -> "... to <next hour>", using (60 - m) minutes
 *   - 15 / 45          -> "quarter", 30 -> "half"
 *   - 1 minute         -> "minute" (singular), otherwise "minutes"
 *
 * Strategic Insight:
 * Keep a lookup table of words for 1..29 (enough for both minutes and hours).
 * For "to", flip minutes to 60 - m and move to the next hour, wrapping 12 -> 1.
 *
 * Parameters:
 *   @param {number} h - The hour of the day (1..12)
 *   @param {number} m - The minutes after the hour (0..59)
 *
 * Returns:
 *   @returns {string} - The time in words
 *
 * Complexity:
 *   - Time Complexity: O(1)
 *   - Space Complexity: O(1) — fixed-size word table
 */

const WORDS = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two",
    "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven",
    "twenty eight", "twenty nine",
];

function minutesPhrase(mins) {
    if (mins === 15) return "quarter";
    if (mins === 30) return "half";
    return `${WORDS[mins]} ${mins === 1 ? "minute" : "minutes"}`;
}

function timeInWords(h, m) {
    if (m === 0) {
        return `${WORDS[h]} o' clock`;
    }

    if (m <= 30) {
        return `${minutesPhrase(m)} past ${WORDS[h]}`;
    }

    const nextHour = h === 12 ? 1 : h + 1;
    return `${minutesPhrase(60 - m)} to ${WORDS[nextHour]}`;
}

// Example / Test Cases:
const cases = [
    [5, 0, "five o' clock"],
    [5, 1, "one minute past five"],
    [5, 10, "ten minutes past five"],
    [5, 15, "quarter past five"],
    [5, 30, "half past five"],
    [5, 40, "twenty minutes to six"],
    [5, 45, "quarter to six"],
    [5, 47, "thirteen minutes to six"],
    [5, 28, "twenty eight minutes past five"],
    [3, 0, "three o' clock"],
    [7, 15, "quarter past seven"],
    [12, 59, "one minute to one"],
];
for (const [h, m, expected] of cases) {
    const got = timeInWords(h, m);
    console.log(`${h}:${String(m).padStart(2, "0")} -> ${got}${got === expected ? "" : `   ❌ expected "${expected}"`}`);
}

module.exports = { timeInWords };
