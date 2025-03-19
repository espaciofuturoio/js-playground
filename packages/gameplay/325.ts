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

function maxSubArrayLen(nums: number[], k: number): number {
  const length = nums.length;
  let maxLen = 0;
  let windowSum = 0;
  let left = 0;
  for (let right = 0; right < length; right++) {
    windowSum += nums[right]!;
    if (windowSum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
      windowSum -= nums[right - left]!;
      left += 1;
    }
  }
  return maxLen;
}

// r=0, l=0
// w=-2
// r=1, l=0
// w=-3
// r=2, l=0
// w=-1
// r=3, l=0
// w=1
