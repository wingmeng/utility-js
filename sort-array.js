/**
 * 对数组中的元素进行排序
 * @param {string} [key] 可选。当数组中元素为 object 时，按 key 进行排序
 * @param {boolean} [reversal] 可选。true 为降序，false 为升序，默认为升序
 */
function sortBy(key, reversal) {
	return function(o, p) {
		var a = key ? o[key] : o,
			b = key ? p[key] : p;

		if (isNaN(a)) {  // 非数字排序
			var locale = navigator.language || navigator.systemLanguage;

			a = String(a);
			b = String(b);

			if (reversal) {
				return b.localeCompare(a, locale);  // 用本地特定顺序来比较
			}
			return a.localeCompare(b, locale);
		} else {
			return (a - b) * (reversal ? -1 : 1);
		}
	}
}
