const findDuplicates = <T>(arr: T[]) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findDuplicates(arr));
