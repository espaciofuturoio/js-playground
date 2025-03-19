// https://leetcode.com/problems/two-sum/description/
// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n^``2) time complexity?

function twoSum(nums: number[], target: number): number[] {
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
}

// https://leetcode.com/problems/two-sum/solutions/5999466/list-most-common-array-interview-beats-100-explained-step-by-step/?source=submission-ac
function twoSum2(nums: number[], target: number): number[] {
	// complement: value that satisfies
	// curr + complement = target
	// complement = target - curr
	// we are going to save x's
	const n = nums.length;
	const map = new Map<number, number>(); // (x,y) where x=curr, y=position
	for (let i = 0; i < n; i++) {
		const curr = nums[i]!;
		const complement = target - curr;
		if (map.has(complement)) {
			return [i, map.get(complement)!];
		}
		map.set(curr, i);
	}
	return [0, 0];
}

for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum2([3, 2, 4], 6));
