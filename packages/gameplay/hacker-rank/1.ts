function compareTriplets(a: number[], b: number[]) {
	return a.reduce<[number, number]>(
		([scoreAlice, scoreBob], feedbackAlice, i) => {
			const feedbackBob = b[i]!;
			return [
				scoreAlice + (feedbackAlice > feedbackBob ? 1 : 0),
				scoreBob + (feedbackAlice < feedbackBob ? 1 : 0),
			];
		},
		[0, 0],
	);
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
