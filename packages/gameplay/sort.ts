const sort = (arr: number[]) => {
	return arr.sort((a, b) => a - b);
};

const sortString = (str: string) => {
	return str.split("").sort().join("");
};

const sortStringArray = (strs: string[]) => {
	return strs.sort((a, b) => a.localeCompare(b));
};

console.log(sort([3, 2, 1]));
console.log(sortString("hello"));
console.log(sortStringArray(["hello", "world", "foo", "bar"]));
