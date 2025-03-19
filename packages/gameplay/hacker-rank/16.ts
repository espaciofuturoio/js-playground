// 206. Reverse Linked List
// Easy
// Topics
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

//  * Definition for singly-linked list.

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Iterative approach
function reverseList(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null;
	let current: ListNode | null = head;

	while (current !== null) {
		// Store next node before we change the pointer
		const next: ListNode | null = current.next;

		// Reverse the pointer
		current.next = prev;

		// Move pointers forward
		prev = current;
		current = next;
	}

	// prev is the new head of the reversed list
	return prev;
}

// Recursive approach
function reverseListRecursive(head: ListNode | null): ListNode | null {
	// Base case: empty list or list with only one node
	if (head === null || head.next === null) {
		return head;
	}

	// Recursively reverse the rest of the list
	const newHead = reverseListRecursive(head.next);

	// Reverse the pointer of the next node to point to current node
	head.next.next = head;

	// Set current node's next to null to avoid cycles
	head.next = null;

	// Return the new head of the reversed list
	return newHead;
}
