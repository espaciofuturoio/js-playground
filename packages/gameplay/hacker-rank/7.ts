// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

// Example

// The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

// Function Description

// Complete the function  with the following parameter(s):

// : the candle heights
// Returns

// : the number of candles that are tallest
// Input Format

// The first line contains a single integer, , the size of .
// The second line contains  space-separated integers, where each integer  describes the height of .

// Constraints

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2
// Explanation 0

// Candle heights are . The tallest candles are  units, and there are  of them.

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// Imperative approach
function countTallestCandlesImperative(heights: number[]): number {
	let tallestCount = 0;
	let maxHeight = 0;

	for (const height of heights) {
		if (height > maxHeight) {
			maxHeight = height;
			tallestCount = 1;
		} else if (height === maxHeight) {
			tallestCount++;
		}
	}

	return tallestCount;
}

// Functional approach with reduce
function countTallestCandlesWithReduce(heights: number[]): number {
	return heights.reduce(
		(result, height) => {
			if (height > result.maxHeight) {
				return { maxHeight: height, count: 1 };
			}
			if (height === result.maxHeight) {
				result.count += 1;
				return result;
			}
			return result;
		},
		{ maxHeight: 0, count: 0 },
	).count;
}

// Concise two-pass functional approach
function countTallestCandles(heights: number[]): number {
	// First find the maximum height
	const maxHeight = Math.max(...heights);

	// Then count how many candles have that height
	return heights.filter((height) => height === maxHeight).length;
}

const input = "3 2 1 3".split(" ").map((n) => Number(n));

// Test cases
console.log("Imperative solution:", countTallestCandlesImperative(input));
console.log("Reduce solution:", countTallestCandlesWithReduce(input));
console.log("Concise solution:", countTallestCandles(input));
