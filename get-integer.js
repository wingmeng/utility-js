/**
 * 取整
 * @param {number} num - 待处理的数
 */
function getInteger(num) {
	if (!isNaN(num)) {
		return num | 0;
	}

	return num;
}
