import { describe, expect, it, spyOn } from "bun:test";
import { merge2 } from "./19";

describe("merge2", () => {
	it("I should handle merge base case", () => {
		
		const nums1 = [1, 2, 3, 0, 0, 0];
		const m = 3;
		const nums2 = [2, 5, 6];
		const n = 3;
		merge2(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
	});
});
