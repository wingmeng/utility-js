/**
 * 过滤数组中的假值：null, false, undefined, 0, NaN, ""
 * @param {array} arr - 待过滤的数组
 */
function filterFalseValue(arr) {
	if (arr instanceof Array) {
		return arr.filter(Boolean);
	}

	return arr;
}
