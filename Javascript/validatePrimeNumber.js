/**
 * Problem: Prime Number Validator & Array Filter
 * -------------------------------------------------------------
 * Determine whether a given positive integer is prime (divisible only by 1 and itself),
 * or filter an array of numbers to return only the primes.
 * 
 * Rules:
 * - 0 and 1 are neither prime nor composite.
 * - Negative numbers and non-integers fail input validation.
 * - For a number N, checking factors up to sqrt(N) is sufficient because any factor
 *   greater than sqrt(N) must pair with a factor less than sqrt(N).
 * 
 * Parameters:
 *   @param {number | number[]} inputValue - A single integer or an array of integers
 * 
 * Returns:
 *   @returns {string | number[] | boolean} - Verification message or array of primes
 * 
 * Complexity:
 *   - Time Complexity: O(sqrt(N)) per number tested
 *   - Space Complexity: O(1) auxiliary
 */
function checkGiveElementIsPrime(inputValue) {
  if (validateKind(inputValue)) {
    return checkPrimeNumberLogicForArrayElement(inputValue);
  }
  if (!inputValueIntegrity(inputValue)) return false; // not a valid non-negative integer
  if (gaurdCaluse(inputValue)) return false;
  return checkPrimeNumberLogicForSingleElement(inputValue);
}

function inputValueIntegrity(givenValue) {
  return (
    typeof givenValue === "number" &&
    Number.isInteger(givenValue) &&
    givenValue >= 0
  );
}

function gaurdCaluse(enteredValue) {
  return enteredValue === 0 || enteredValue === 1;
}

function validateKind(validateEnteredValue) {
  return Array.isArray(validateEnteredValue);
}

function checkPrimeNumberLogicForArrayElement(valueEnteredRunTimeForArray) {
  let resultArray = [];
  for (let i = 0; i < valueEnteredRunTimeForArray.length; i++) {
    const validatorMessage = checkPrimeNumberLogicForSingleElement(
      valueEnteredRunTimeForArray[i],
    );
    if (validatorMessage.endsWith(" is a prime number")) {
      resultArray.push(valueEnteredRunTimeForArray[i]);
    }
  }
  return resultArray;
}

function checkPrimeNumberLogicForSingleElement(valueEnteredRunTime) {
  let boundaryValue = Number(boundaryValueDecider(valueEnteredRunTime));
  for (let m = 2; m <= boundaryValue; m++) {
    if (valueEnteredRunTime % m === 0) {
      return "'" + valueEnteredRunTime + "'" + " is not a prime number";
    }
  }
  return "'" + valueEnteredRunTime + "'" + " is a prime number";
}

function boundaryValueDecider(inputInteger) {
  return Math.floor(Math.sqrt(inputInteger));
}

// Example usage:
console.log(checkGiveElementIsPrime([3, 7, 4, 13, 9, 19, 17])); // [3, 7, 13, 19, 17]
console.log(checkGiveElementIsPrime(77));                         // "'77' is not a prime number"
console.log(checkGiveElementIsPrime(29));                         // "'29' is a prime number"
