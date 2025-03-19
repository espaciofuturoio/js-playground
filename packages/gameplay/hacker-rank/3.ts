// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = .
// The right-to-left diagonal = .
// Their absolute difference is .

// Function description

// Complete the  function with the following parameter:

// : a 2-D array of integers
// Return

// : the absolute difference in sums along the diagonals
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Sample Input

// STDIN      Function
// -----      --------
// 3           arr[][] sizes n = 3, m = 3
// 11 2 4     arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: .

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal:
// Difference:

// Note: |x| is the absolute value of x.

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
	// Write your code here
	const n = arr.length;
	const [sumDA, sumDB] = arr.reduce<[number, number]>(
		([dA, dB], currRow, i) => {
			// Ensure array indices are valid
			const primaryDiag = currRow[i] ?? 0;
			const secondaryDiag = currRow[n - 1 - i] ?? 0;
			return [dA + primaryDiag, dB + secondaryDiag];
		},
		[0, 0],
	);
	return Math.abs(sumDA - sumDB);
}

// Alternative implementation without reduce for clarity
function diagonalDifferenceAlt(arr: number[][]): number {
	const n = arr.length;
	let primaryDiagonalSum = 0;
	let secondaryDiagonalSum = 0;

	for (let i = 0; i < n; i++) {
		// Ensure array indices are valid
		primaryDiagonalSum += arr[i]?.[i] ?? 0; // Primary diagonal: (0,0), (1,1), (2,2), ...
		secondaryDiagonalSum += arr[i]?.[n - 1 - i] ?? 0; // Secondary diagonal: (0,n-1), (1,n-2), (2,n-3), ...
	}

	return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// More elegant functional implementation using array methods
function diagonalDifferenceOptimal(arr: number[][]): number {
	const n = arr.length;

	// Create an array of indices and use them to map/reduce in a single pass
	return Math.abs(
		Array.from({ length: n }).reduce((diff, _, i) => {
			// For each row, add primary diagonal and subtract secondary diagonal
			// This accumulates the difference directly
			return diff + (arr[i]?.[i] ?? 0) - (arr[i]?.[n - 1 - i] ?? 0);
		}, 0),
	);
}

// Purely declarative approach using array methods
function diagonalDifferencePure(arr: number[][]): number {
	const n = arr.length;

	// Use indices to extract values for both diagonals
	const indices = Array.from({ length: n }, (_, i) => i);

	const primaryDiagonal = indices.map((i) => arr[i]?.[i] ?? 0);
	const secondaryDiagonal = indices.map((i) => arr[i]?.[n - 1 - i] ?? 0);

	// Sum each diagonal
	const primarySum = primaryDiagonal.reduce((sum, val) => sum + val, 0);
	const secondarySum = secondaryDiagonal.reduce((sum, val) => sum + val, 0);

	return Math.abs(primarySum - secondarySum);
}

console.log(
	diagonalDifferenceAlt([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	]),
); // 15

console.log(
	diagonalDifferenceOptimal([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	]),
); // 15

console.log(
	diagonalDifferencePure([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	]),
); // 15
