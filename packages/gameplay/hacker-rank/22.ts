// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Example

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// The  hourglass sums are:

// -63, -34, -9, 12,
// -10,   0, 28, 23,
// -27, -11, -2, 10,
//   9,  17, 25, 18
// The highest hourglass sum is  from the hourglass beginning at row , column :

// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Constraints

// Output Format

// Print the largest (maximum) hourglass sum found in .

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// Sample Output

// 19
// Explanation

//  contains the following hourglasses:

// image

// The hourglass with the maximum sum () is:

// 2 4 4
//   2
// 1 2 4

/**
 * Calculates the maximum hourglass sum in a 6x6 array
 * @param arr - 6x6 array of integers
 * @returns the maximum hourglass sum
 */
function hourglassSum(arr: number[][]): number {
	// Initialize the max sum to minimum safe integer
	// (since we could have negative values)
	let maxSum = Number.MIN_SAFE_INTEGER;

	// Iterate through the array
	// Since an hourglass is 3x3, we can only start at positions (i,j)
	// where i+2 < 6 and j+2 < 6, or in other words, i ≤ 3 and j ≤ 3.
	for (let i = 0; i <= 3; i++) {
		for (let j = 0; j <= 3; j++) {
			// Calculate the sum of the current hourglass
			const sum =
				// Top row
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				// Middle (just the center element)
				arr[i + 1][j + 1] +
				// Bottom row
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];

			// Update max sum if current sum is greater
			maxSum = Math.max(maxSum, sum);
		}
	}

	return maxSum;
}

// To test with the sample input:

const sample = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0],
];
console.log(hourglassSum(sample)); // Should output 19

//			j0				  j1	      j2
//i0		i+0,j+0		  i+0,j+1  	i+0,j+2
//i1		i+1,j+0		  i+1,j+1  	i+1,j+2
//i2		i+2,j+0		  i+2,j+1  	i+2,j+2
