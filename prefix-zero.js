/**
 * 前置补零
 * @param {number} num - 待处理数字
 * @param {string} len - 数字位数
 */
function prefixZero(num, len) {
	return (new Array(len).join('0') + num).substr(-len);
}
