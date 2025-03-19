// 1. Longest Substring Without Repeating Characters
// Problem Statement:
// Given a string, find the length of the longest substring that does not contain any repeating characters.

// Example:

// Input: "abcabcbb"
// Output: 3
// Explanation: The longest substring is "abc".

// [a,b,c,a,b,c,b,b]
// r
// l

const longestSubstring = (s: string): number => {
  const seen = new Map<string, number>();
  let maxLen = 0;
  let left = 0;
  const n = s.length;
  for (let right = 0; right < n; right++) {
    const char = s.charAt(right);
    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1;
    }
    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

console.log(longestSubstring("abcabcbb"));

// 1. Maximum Sum Subarray of Size K
// Given an array of positive integers and a positive number k, find the maximum sum of any contiguous subarray of size k.

// [1,2,3,3,4,1,1,2]
// const findC = (arr: number[], k: number) => {
//   let maxSum = 0;
//   const n = arr.length;
//   let sum = arr.slice(0, k).reduce((prev, curr) => prev + curr, 0);
//   for (let j = k; j < n; j++) {
//     sum += arr[j]!;
//     sum -= arr[j - k]!;
//     maxSum = Math.max(maxSum, sum);
//   }
//   return maxSum;
// };

// const findC = (arr: number[], k: number) => {
//   let maxSum = 0;
//   let windowSum = 0;
//   let l = 0;
//   const n = arr.length;
//   for (let r = 0; r < n; r++) {
//     windowSum += arr[r]!;
//     if (r - l + 1 === k) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[r - l]!;
//     }
//   }
//   return maxSum;
// };

// console.log(findC([3, 5, 2, 1, 7], 2));

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
  let maxSum = 0;
  let left = 0;
  for (let right = 0; right < length; right++) {
    maxSum += nums[right]!;
    if (maxSum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
      maxSum -= nums[right - left]!;
      left += 1;
    }
  }
  return maxLen;
}
