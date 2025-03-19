// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Code
// Testcase
// Test Result
// Test Result
// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
	// Edge case: empty string
	if (s.length === 0) return 0;

	// Map to store the most recent position of each character
	const charPositions = new Map<string, number>();

	let maxLength = 0; // Track the maximum length found
	let windowStart = 0; // Start of our current window

	// Iterate through the string
	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		const currentChar = s[windowEnd];

		// If we've seen this character before and it's in our current window
		if (
			charPositions.has(currentChar) &&
			charPositions.get(currentChar)! >= windowStart
		) {
			// Move window start to position after the previous occurrence
			windowStart = charPositions.get(currentChar)! + 1;
		}

		// Update the position of the current character
		charPositions.set(currentChar, windowEnd);

		// Update max length if current window is larger
		const currentLength = windowEnd - windowStart + 1;
		maxLength = Math.max(maxLength, currentLength);
	}

	return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
