export const findDuplicates = <T>(arr: T[]) => {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return duplicates;
};

export const hasDuplicates = <T>(arr: T[]) => {
  return new Set(arr).size !== arr.length;
};

export const findDuplicatesWithLoop = <T>(arr: T[]) => {
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findDuplicates(arr));
console.log(hasDuplicates(arr));
console.log(findDuplicatesWithLoop(arr));
console.log("---");
console.log(findDuplicatesWithLoop([1, 2, 3, 4]));
