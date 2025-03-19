// 159. Longest Substring with At Most Two Distinct Characters
// Medium
// Topics
// Companies
// Given a string s, return the length of the longest substring that contains at most two distinct characters.

// Example 1:

// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.
// Example 2:

// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.

// Constraints:

// 1 <= s.length <= 105
// s consists of English letters.

export function lengthOfLongestSubstringTwoDistinct(s: string): number {
	const total = s.length;
	const positions = new Map<string, number>();
	let maxLen = 0;
	let startWindow = 0;

	for (let endWindow = 0; endWindow < total; endWindow++) {
		const current = s[endWindow]!;

		// Add current character to our map
		positions.set(current, endWindow);

		// If we have more than 2 distinct characters, shrink the window
		if (positions.size > 2) {
			// Find the character with the leftmost position to remove
			let leftmost = total;
			let charToRemove = "";

			for (const [char, pos] of positions.entries()) {
				if (pos < leftmost) {
					leftmost = pos;
					charToRemove = char;
				}
			}

			// Move start pointer to just after the leftmost character
			startWindow = leftmost + 1;

			// Remove the character from our map
			positions.delete(charToRemove);
		}

		// Update maximum length
		maxLen = Math.max(maxLen, endWindow - startWindow + 1);
	}

	return maxLen;
}
