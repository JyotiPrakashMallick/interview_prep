/**
 * Problem: Day of the Programmer (Optimized Approach)
 * -------------------------------------------------------------
 * Computes the 256th day of the year using direct arithmetic rather than
 * month iteration.
 * 
 * In standard years:
 * - Days in Jan-Aug (non-leap) = 31+28+31+30+31+30+31+31 = 243 days.
 *   Day 256 falls on 256 - 243 = September 13th ("13.09.YYYY").
 * - Days in Jan-Aug (leap year) = 244 days.
 *   Day 256 falls on 256 - 244 = September 12th ("12.09.YYYY").
 * - Transition year (1918): February lost 13 days (Feb 14 replaced Feb 1).
 *   Day 256 falls on September 26th ("26.09.1918").
 * 
 * Parameters:
 *   @param {number} year - The target year (1700 <= year <= 2700)
 * 
 * Returns:
 *   @returns {string} - Formatted date string "dd.mm.yyyy"
 * 
 * Complexity:
 *   - Time Complexity: O(1)
 *   - Space Complexity: O(1)
 */
function isLeapJulian(year) {
    return year % 4 === 0;
}

function isLeapGregorian(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function dayOfProgrammer(year) {
    if (year === 1918) {
        // Special transition year where Feb 14 was the 32nd day
        return "26.09.1918";
    }

    const isJulian = year < 1918;
    const isLeap = isJulian ? isLeapJulian(year) : isLeapGregorian(year);

    if (isLeap) {
        // Leap year: February has 29 days -> 12th of September
        return `12.09.${year}`;
    } else {
        // Non-leap year: February has 28 days -> 13th of September
        return `13.09.${year}`;
    }
}
