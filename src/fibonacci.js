// 递归方法
// function fibonacci(n) {
//   let fn = i => i < 3 ? 1 : fn(i - 1) + fn(i - 2);
//   return [...Array(n).keys()].map(it => fn(it + 1));
// }

// 数组遍历
function fibonacci(n) {
  return [...Array(n).keys()].map((it, idx, arr) => {
    arr[idx] = it < 2 ? 1 : arr[idx - 1] + arr[idx - 2];
    return arr[idx];
  });
}
