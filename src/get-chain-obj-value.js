/**
 * 对数组中的元素进行排序
 * @param {object | array} data - 需要取值的数据
 * @param {string | number} chainStr - 链式字符串或数组索引，例如：'a.b.c'
 */
function getChainObjValue(data, chainStr = null) {
  if (chainStr == undefined) {
    return data;
  }

  return String(chainStr).split('.')
    .reduce((obj, field) => obj ? obj[field] : null, data);
}