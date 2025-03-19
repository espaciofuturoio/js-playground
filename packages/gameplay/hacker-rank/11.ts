// Tim is visiting his grandma for two days and is bored due to the lack of the electricity over there. That's why he starts to play with grandma's colorful candle collection.

// He aligned the  candles from left to right. The th candle from the left has the height  and the color , an integer ranged from 1 to a given , the number of colors.

// Now he stares at the sequence of candles and wonders, how many strictly increasing ( in height ) colorful subsequences are there? A subsequence is considered as colorful if every of the  colors appears at least one times in the subsequence.

// As the number of subsequences fulfilling the requirement can be large, print the result modulo .

// Input Format

// On the first line you will be given  and , then  lines will follow. On the th line you will be given two integers  and .

// Constraints

// Output Format

// Print the number of strictly increasing colorful subsequences modulo 10^9 + 7.

// Sample Input

// 4 3
// 1 1
// 3 2
// 2 2
// 4 3
// Sample Output

// 2
// Explanation

// In the first sample the only two valid subsequences are (1, 2, 4) and (1, 3, 4).

function countColorfulSubsequences(
	n: number,
	k: number,
	candles: Array<[number, number]>,
): number {
	const MOD = 1_000_000_007;

	// dp[i][mask] = number of ways to form a subsequence ending at index i with colors in the mask
	const dp: number[][] = Array(n)
		.fill(0)
		.map(() => Array(1 << k).fill(0));

	// Initialize for single candle
	for (let i = 0; i < n; i++) {
		const [_, color] = candles[i];
		dp[i][1 << (color - 1)] = 1; // Start with just this candle
	}

	// Fill the dp table
	for (let i = 0; i < n; i++) {
		const [height_i, color_i] = candles[i];
		const color_mask_i = 1 << (color_i - 1);

		// Try to extend previous subsequences with the current candle
		for (let j = 0; j < i; j++) {
			const [height_j, _] = candles[j];

			// Can only extend if current height is greater than previous
			if (height_i > height_j) {
				for (let mask = 0; mask < 1 << k; mask++) {
					if (dp[j][mask] > 0) {
						// Add this candle to the subsequence
						const new_mask = mask | color_mask_i;
						dp[i][new_mask] = (dp[i][new_mask] + dp[j][mask]) % MOD;
					}
				}
			}
		}
	}

	// Sum up all subsequences that include all colors
	const all_colors_mask = (1 << k) - 1;
	let result = 0;

	for (let i = 0; i < n; i++) {
		result = (result + dp[i][all_colors_mask]) % MOD;
	}

	return result;
}

// Example usage with the sample input
const n = 4,
	k = 3;
const candles: Array<[number, number]> = [
	[1, 1],
	[3, 2],
	[2, 2],
	[4, 3],
];

console.log(countColorfulSubsequences(n, k, candles)); // Expected output: 2

// Function to parse input and solve the problem
function solveHackerRankProblem(input: string): number {
	const lines = input.trim().split("\n");
	const [n, k] = lines[0].split(" ").map(Number);

	const candles: Array<[number, number]> = [];
	for (let i = 1; i <= n; i++) {
		const [height, color] = lines[i].split(" ").map(Number);
		candles.push([height, color]);
	}

	return countColorfulSubsequences(n, k, candles);
}

// This function can be used with HackerRank's input
export function main(input: string): void {
	const result = solveHackerRankProblem(input);
	console.log(result);
}
