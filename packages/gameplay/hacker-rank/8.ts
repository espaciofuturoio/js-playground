// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the  function with the following parameter(s):

// : a time in  hour format
// Returns

// : the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string) {
  const [hh = "", mm = "", ssA = ""] = s.split(":");
  const A = ssA.slice(-2);
  const ss = ssA.slice(0, 2);
  let newHH = "";
  if (A === "AM") {
    newHH = hh === "12" ? "00" : hh;
  } else {
    newHH = hh === "12" ? "12" : String(Number(hh) + 12);
  }
  return `${newHH}:${mm}:${ss}`;
}

function timeConversion2(s: string): string {
  // Use regex to extract time components: hours, minutes, seconds, and period (AM/PM)
  const timeRegex = /^(\d{2}):(\d{2}):(\d{2})(AM|PM)$/;
  const [, hours, minutes, seconds, period] = s.match(timeRegex) || [];

  // Convert hours to 24-hour format
  const hour24 =
    period === "AM"
      ? hours === "12"
        ? "00"
        : hours?.padStart(2, "0") ?? ""
      : hours === "12"
      ? "12"
      : String(Number(hours) + 12);

  return `${hour24}:${minutes}:${seconds}`;
}

console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("2:01:00AM"));
console.log(timeConversion("07:05:45PM"));
console.log("-----");
console.log(timeConversion2("12:00:00AM"));
console.log(timeConversion2("12:00:00PM"));
console.log(timeConversion2("12:01:00AM"));
console.log(timeConversion2("02:01:00AM"));
console.log(timeConversion2("07:05:45PM"));
