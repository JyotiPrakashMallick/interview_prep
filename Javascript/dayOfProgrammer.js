/**
 * Problem: Day of the Programmer
 * -------------------------------------------------------------
 * Marie invented a Time Machine to travel back to 1918. Help her find the date
 * corresponding to the 256th day of any given year (from 1700 to 2700) in Russia.
 * 
 * Historical Rules in Russia:
 * 1. Julian Calendar (1700 to 1917):
 *    - Leap year if divisible by 4 (`year % 4 === 0`).
 * 2. Gregorian Transition (1918):
 *    - The day after Jan 31 was Feb 14 (Feb 14 was the 32nd day of the year).
 * 3. Gregorian Calendar (1919 onwards):
 *    - Leap year if divisible by 400 OR (divisible by 4 and not divisible by 100).
 * 
 * Target: Calculate the exact DD.MM.YYYY date for day 256.
 * 
 * Parameters:
 *   @param {number} year - The target year (1700 <= year <= 2700)
 * 
 * Returns:
 *   @returns {string} - Formatted date string "dd.mm.yyyy"
 * 
 * Complexity:
 *   - Time Complexity: O(1) (iterates over at most 12 months)
 *   - Space Complexity: O(1)
 */
function dayOfProgrammer(year) {
    let isLeapYear = false;
    let day = 0;
    let month = 0;

    if (year === 1918) {
        day = 26;
        month = 9;
    } else if (
        (year < 1918 && year % 4 === 0) ||
        (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))
    ) {
        isLeapYear = true;
    }

    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < daysInMonth.length; i++) {
        if (day + daysInMonth[i] > 256) {
            month = i + 1;
            day = 256 - day;
            break;
        }
        day += daysInMonth[i];
    }

    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}
