/**
 * Problem: Time Conversion (12-Hour AM/PM to 24-Hour Military Format)
 * ------------------------------------------------------------------
 * Given a time in 12-hour AM/PM format (e.g. "07:05:45PM"), convert it to
 * military (24-hour) time (e.g. "19:05:45").
 * 
 * Rules:
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * - Any other PM hour (01 PM to 11 PM) adds 12 to the hour: `hour + 12`.
 * - Any other AM hour (01 AM to 11 AM) stays the same: `hour`.
 * 
 * Parameters:
 *   @param {string} s - Time string in format "hh:mm:ssAM" or "hh:mm:ssPM"
 * 
 * Returns:
 *   @returns {string} - Military time string in 24-hour format "HH:mm:ss"
 * 
 * Complexity:
 *   - Time Complexity: O(1)
 *   - Space Complexity: O(1)
 */
function timeConversion(s) {
    const modifier = s.slice(-2); // "AM" or "PM"
    let [hours, minutes, seconds] = s.slice(0, -2).split(":");

    if (modifier === "AM") {
        if (hours === "12") {
            hours = "00";
        }
    } else { // "PM"
        if (hours !== "12") {
            hours = String(Number(hours) + 12);
        }
    }

    return `${hours}:${minutes}:${seconds}`;
}

// Example usage:
console.log(timeConversion("12:45:54PM")); // "12:45:54"
console.log(timeConversion("12:00:00AM")); // "00:00:00"
console.log(timeConversion("07:05:45PM")); // "19:05:45"
