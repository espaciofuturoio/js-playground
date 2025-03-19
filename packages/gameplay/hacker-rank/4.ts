// Given an array of integers, calculate the ratios of its elements that are , , and . Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements: two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the  function with the following parameter(s):

// : an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// Constraints

// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus1(arr: number[]) {
	const n = arr.length;
	const sums = arr.reduce<[number, number, number]>(
		([positive, negative, zero], curr) => {
			return [
				positive + (curr > 0 ? 1 : 0),
				negative + (curr < 0 ? 1 : 0),
				zero + (curr === 0 ? 1 : 0),
			];
		},
		[0, 0, 0],
	);
	for (const sum of sums) {
		console.log((sum / n).toFixed(6));
	}
}

function plusMinus2(arr: number[]): void {
	const total = arr.length;

	// Count values by category using filter
	const positiveCount = arr.filter((num) => num > 0).length;
	const negativeCount = arr.filter((num) => num < 0).length;
	const zeroCount = arr.filter((num) => num === 0).length;

	// Calculate ratios using a functional approach
	const formatRatio = (count: number): string => (count / total).toFixed(6);

	// Print results
	for (const ratio of [positiveCount, negativeCount, zeroCount]) {
		console.log(formatRatio(ratio));
	}
}

plusMinus2([-4, 3, -9, 0, 4, 1]);
