/**
 * 获取两个数组的交集
 * @param {array} arr1 - 数组
 * @param {array} arr2 - 数组
 * @return {array}
 */
function getArrIntersection(arr1, arr2) {
  let result = [];

  [...arr1].forEach((item, index, array) => {
    if (arr2.includes(item)) {
      result.push(item);
      array.splice(index, 1);
    }
  });

  return result;
}
