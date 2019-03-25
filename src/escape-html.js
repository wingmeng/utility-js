/**
 * HTML 转义
 * @param {string} str - 待转义的字符串
 */
function escapeHTML(str) {
	return new Option(str).innerHTML;
}

