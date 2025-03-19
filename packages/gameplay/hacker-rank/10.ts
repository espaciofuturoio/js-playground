// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/
// 325. Maximum Size Subarray Sum Equals k
// Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there is not one, return 0 instead.

// Example 1:

// Input: nums = [1,-1,5,-2,3], k = 3
// Output: 4
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
// Example 2:

// Input: nums = [-2,-1,2,1], k = 1
// Output: 2
// Explanation: The subarray [-1, 2] sums to 1 and is the longest.

// Constraints:

// 1 <= nums.length <= 2 * 105
// -104 <= nums[i] <= 104
// -109 <= k <= 109

function maxSubArrayLen(nums: number[], k: number): number {
  const n = nums.length;
  let maxLen = 0;
  let seemSum = new Map([[0, -1]]); // key: sum, value: index
  let currentSum = 0
  for (let i = 0; i < n; i++) {
    currentSum+= nums[i]!
     if ()
  }
}
