// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the  function with the following parameter(s):

// : an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.No value should be returned.

// Note For some languages, like C, C++, and Java, the sums may require that you use a long integer due to their size.

// Input Format

// A single line of five space-separated integers.

// Constraints

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use a 64-bit integer to store the sums.

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum1(arr: number[]) {
	const sum = arr.reduce((sum, curr) => sum + curr, 0);
	const sorted = arr.map((n) => sum - n).sort();
	console.log(sorted.at(0), sorted.at(-1));
}

function miniMaxSum2(arr: number[]): void {
	// Sort the array in ascending order
	const sorted = [...arr].sort((a, b) => a - b);

	// Calculate min sum (sum of the 4 smallest elements)
	const minSum = sorted.slice(0, 4).reduce((sum, num) => sum + num, 0);

	// Calculate max sum (sum of the 4 largest elements)
	const maxSum = sorted.slice(1).reduce((sum, num) => sum + num, 0);

	// Print the min and max sums
	console.log(`${minSum} ${maxSum}`);
}

function miniMaxSum3(arr: number[]) {
	let sum = 0;
	let min = arr[0];
	let max = arr[0];
	for (const elemet of arr) {
		sum += elemet;
		if (elemet > max) max = elemet;
		if (elemet < min) min = elemet;
	}
	const sumMax = sum - min;
	const sumMin = sum - max;
	console.log(`${sumMin} ${sumMax}`);
}

const input = "1 2 3 4 5".split(" ").map((n) => Number(n));
console.log(input);
miniMaxSum1(input);
miniMaxSum2(input);
miniMaxSum3(input);
