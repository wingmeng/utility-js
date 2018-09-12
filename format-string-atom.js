/**
 * 格式化拼接字符串每个字符
 * @param {string} str - 待格式化的字符串
 * @param {string} symbol - 字符串字符之间的连字符
 */
function formatStringAtom(str, symbol) {
	return Array.prototype.join.call(String(str), symbol);
}
