// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// 88. Merge Sorted Array
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	const totalLen = m + n;
	let nums2i = 0;
	for (let i = 0; i < totalLen; i++) {
		const currentNums1 = nums1[i]!;
		const currentNums2 = nums2[nums2i]!;
		if (currentNums1 > currentNums2) {
			nums1.splice(i, 0, currentNums2);
			nums2i++;
		}
		if (currentNums1 === 0) {
			nums1.splice(i, totalLen - i + 1, ...nums2.slice(nums2i));
		}
	}
}

export function merge2(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
): void {
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;

	// TypeScript knows i and j are in bounds due to the while condition
	while (i >= 0 && j >= 0) {
		// Since i and j are checked to be valid indices, TypeScript won't complain
		if (nums1[i] > nums2[j]) {
			nums1[k--] = nums1[i--];
		} else {
			nums1[k--] = nums2[j--];
		}
	}

	// Copy remaining elements from nums2 if any
	while (j >= 0) {
		nums1[k--] = nums2[j--];
	}
}

const a = [1, 2, 3, 0, 0, 0];
const b = [2, 5, 6];

console.log(a);
console.log(b);
merge2(a, 3, b, 3);
console.log(a);
