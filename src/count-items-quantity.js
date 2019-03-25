/**
 * 统计数组中相同项目的个数
 * @param {array} arr - 待统计的数组
 */
function countItemsQuanitity(arr) {
	if (arr instanceof Array) {
		return arr.reduce(function(obj, item) {
			obj[item] = obj[item] ? ++obj[item] : 1;
			return obj;
		}, {});
	}
}
