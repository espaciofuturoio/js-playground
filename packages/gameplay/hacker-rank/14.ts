// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true

// An array is a data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

// Your task is to reverse an array of integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Example

// Return .

// Function Description

// Complete the function  with the following parameter(s):

// : the array to reverse
// Returns

// : the reversed array
// Input Format

// The first line contains an integer, , the number of integers in .
// The second line contains  space-separated integers that make up .

// Constraints

// Sample Input 1

// CopyDownload
// Array: arr
// 1
// 4
// 3
// 2

// 4
// 1 4 3 2
// Sample Output 1

// 2 3 4 1
// Explanation 1

// The original array is . Reversed, it is .

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a: number[]) {
	return a.reverse();
}

function reverseArray2(a: number[]) {
	const n: number[] = [];
	while (a.length > 0) {
		n.unshift(a.shift()!);
	}
	return n;
}

// Solution 1: Create a new array in reverse order with a simple loop (O(n) time, O(n) space)
function reverseArray3(a: number[]): number[] {
	const result = new Array(a.length);
	for (let i = 0; i < a.length; i++) {
		result[i] = a[a.length - 1 - i];
	}
	return result;
}

// Solution 2: Using array spread with reverse (O(n) time, O(n) space)
function reverseArray4(a: number[]): number[] {
	return [...a].reverse();
}

// Solution 3: Two-pointer approach (O(n/2) time, O(n) space)
function reverseArray5(a: number[]): number[] {
	const copy = [...a];
	let left = 0;
	let right = copy.length - 1;

	while (left < right) {
		[copy[left], copy[right]] = [copy[right], copy[left]];
		left++;
		right--;
	}

	return copy;
}

// Solution 4: Using reduceRight (more functional approach)
function reverseArray6(a: number[]): number[] {
	return a.reduceRight((acc, curr) => [...acc, curr], [] as number[]);
}

console.log(reverseArray([1, 4, 3, 2]));
console.log(reverseArray2([1, 4, 3, 2]));
console.log(reverseArray3([1, 4, 3, 2]));
console.log(reverseArray4([1, 4, 3, 2]));
console.log(reverseArray5([1, 4, 3, 2]));
console.log(reverseArray6([1, 4, 3, 2]));


