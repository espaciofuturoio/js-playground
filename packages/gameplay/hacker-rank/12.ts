const arr = [1, -1, 5, -2, 3];
const k = 3;
console.log(arr);
const n = arr.length;
const prefixSum = Array(n);
prefixSum[0] = arr[0];
for (let i = 1; i < n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}
const deltas = new Map();
for (let i = 0; i < n; i++) {
  prefixSum[i] - k;
}
console.log(prefixSum);
