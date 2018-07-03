/**
 * 移除给定数组中的重复元素，返回新数组
 * @param {Array} arr - 待处理数组
 */
function removeRepeat(arr) {
	var result = [];
		hash = {};

	for (var i = 0, elm; i < arr.length; i++) {
		elm = arr[i];

		if (!hash[elm]) {
			result.push(elm);
			hash[elm] = true;
		}
	}

	return result;
}
